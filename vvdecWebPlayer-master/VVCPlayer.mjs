'use strict';

import * as THREE from './lib/three.module.min.js';

const DEFAULT_FPS = 50;

export default class VVCPlayer {
  decoderWorker;                       // WebWorker that loads WASM, instantiates, and runs the decoder
  numDecoderThreads = 10;
  mp4Duration;                         // duration read from the mp4 metadata
  dashDuration;                        // duration read from the dash manifest
  numFrames;                           // number of video frames read from the mp4 metadata
  #playingStatus = "stop";             // playback status "play"/"pause"/"stop"
  vidFrameH; vidFrameW; vidBitDepth;   // size and bit depth of previous displayed frames
  vidTrackMaxW; vidTrackMaxH;          // maximum size of the currently playing track (from mp4 metadata)
  outputDisabled;                      // benchmarking: don't do the actual WebGL drawing
  needWebGlReinit = true;              // video size or resolution changed -> need to setup GL textures
  displaySizeFixed = false;
  downloadedDuration = undefined;
  #renditionIdx = null;
  renditions = undefined;
  
  // Audio playback
  audioContext = null;
  audioDecoder = null;
  audioSampleQueue = [];
  audioStartTime = null;
  audioMuted = false;
  audioVolume = 1.0;
  gainNode = null;
  hasAudio = false;
  audioCodec = null;
  audioSampleRate = 48000;
  audioChannelCount = 2;
  videoPlaybackStartTime = null;  // When video playback actually started
  firstVideoFrameCts = null;      // CTS of the first video frame
  audioCodecConfig = null;        // AAC specific config
  audioInitialized = false;       // Whether audio decoder is ready
  scheduledAudioEndTime = 0;      // Track scheduled audio end time

  DEFAULT_FPS = DEFAULT_FPS;

  onPrintMsg = (m, _) => console.log(m);
  onErrorMsg = (m, _) => console.error(m);
  onReady = undefined;
  onEOF = undefined;
  onMetadata = undefined;
  onDownloadProgress = undefined;
  onDrawFrame = undefined;
  onStatusChange = undefined;

  get playingStatus() {
    return this.#playingStatus;
  }
  set playingStatus(status) {
    this.#playingStatus = status;
    if (this.onStatusChange) {
      this.onStatusChange(status);
    }
  }

  get duration() {
    if (this.dashDuration && this.dashDuration >= this.mp4Duration) {
      return this.dashDuration;
    }
    else {
      return this.mp4Duration;
    }
  }

  get fps() {
    return this.FrameDisplayScheduler.targetFPS;
  }

  set rendition(idx) {
    if (this.#renditionIdx === idx) {
      return;
    }
    if (idx === null) {
      this.#renditionIdx = null;
    }
    else {
      this.#renditionIdx = Math.min(Math.max(0, idx), this.renditions.length - 1);
    }

    this.decoderWorker.postMessage({
      cmd: 'dashRendition',
      rendition: this.renditions[this.#renditionIdx ?? this.defaultRenditionIdx()].playlistIdx,
    });
  }
  get rendition() {
    if (!this.renditions) {
      return undefined;
    }
    return this.renditions[this.#renditionIdx ?? this.defaultRenditionIdx()];
  }

  defaultRenditionIdx() {
    return Math.floor(this.renditions?.length / 2);
  }

  constructor(canvas, appPath) {
    this.decoderWorker = new Worker("decoderWorker.js");
    const t = this;
    this.decoderWorker.onmessage = e => t.#onWorkerMessage(e);
    this.decoderWorker.postMessage({
      cmd: 'init',
      appPath: appPath
    });

    this.canvas = canvas;

    this.FrameQueue.player = this;
    this.FrameDisplayScheduler.player = this;
  }

  play(url, repeat) {
    this.playingStatus = "play";

    this.mp4Duration = null;
    this.dashDuration = null;
    this.renditions = undefined;

    this.FrameQueue.clear(true);

    if (url.match(/\.(mpd|xml)$/)) {
      this.#playMPD(url);
      return;
    }

    this.decoderWorker.postMessage({
      cmd: 'startDecoding',
      url: url,
      repeat: repeat,
      numDecThreads: this.numDecoderThreads,
    });
  };

  pause() {
    this.playingStatus = "pause";
    if (this.audioContext && this.audioContext.state === 'running') {
      this.audioContext.suspend();
    }
  }

  continue() {
    this.playingStatus = "play";
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume().then(() => {
        // Reset scheduled audio time after resume
        this.scheduledAudioEndTime = this.audioContext.currentTime;
      });
    }
    this.FrameQueue.start();
    this.FrameDisplayScheduler.start();
  }

  stop() {
    this.playingStatus = "stop";
    this.decoderWorker.postMessage({ cmd: 'stop' });
    this.renderer?.clear();
    this.FrameQueue.clear();
    this.#stopAudio();
  }
  
  // Audio control methods
  setVolume(volume) {
    this.audioVolume = Math.max(0, Math.min(1, volume));
    if (this.gainNode) {
      this.gainNode.gain.value = this.audioVolume;
    }
  }
  
  setMuted(muted) {
    this.audioMuted = muted;
    if (this.gainNode) {
      this.gainNode.gain.value = muted ? 0 : this.audioVolume;
    }
  }
  
  #initAudio(codec, sampleRate, channelCount) {
    if (this.audioContext) {
      this.#stopAudio();
    }
    
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
        sampleRate: sampleRate
      });
      
      this.gainNode = this.audioContext.createGain();
      this.gainNode.gain.value = this.audioMuted ? 0 : this.audioVolume;
      this.gainNode.connect(this.audioContext.destination);
      
      this.audioSampleQueue = [];
      this.audioStartTime = null;
      this.audioSampleRate = sampleRate;
      this.audioChannelCount = channelCount;
      this.audioCodec = codec;
      
      // Initialize AudioDecoder if WebCodecs is supported
      if (typeof AudioDecoder !== 'undefined' && codec) {
        this.#initAudioDecoder(codec, sampleRate, channelCount);
      }
      
      console.log(`Audio initialized: ${codec} ${sampleRate}Hz ${channelCount}ch`);
    } catch (e) {
      console.error('Failed to initialize audio:', e);
    }
  }
  
  #initAudioDecoder(codec, sampleRate, channelCount, codecConfig) {
    try {
      // Map codec string to WebCodecs format
      let codecString = codec;
      if (codec.startsWith('mp4a.40')) {
        codecString = codec; // AAC codec string
      }
      
      this.audioDecoder = new AudioDecoder({
        output: (audioData) => {
          this.#handleDecodedAudio(audioData);
        },
        error: (e) => {
          console.error('AudioDecoder error:', e);
        }
      });
      
      const config = {
        codec: codecString,
        sampleRate: sampleRate,
        numberOfChannels: channelCount,
      };
      
      // Add codec specific config if available (required for AAC)
      if (codecConfig) {
        config.description = codecConfig;
      }
      
      this.audioDecoder.configure(config);
      this.audioInitialized = true;
      
      console.log('AudioDecoder initialized with codec:', codecString, 'config:', codecConfig?.length, 'bytes');
    } catch (e) {
      console.warn('AudioDecoder not supported or failed to initialize:', e);
      this.audioDecoder = null;
      this.audioInitialized = false;
    }
  }
  
  #handleDecodedAudio(audioData) {
    if (!this.audioContext || this.playingStatus !== 'play') {
      audioData.close();
      return;
    }
    
    const numberOfChannels = audioData.numberOfChannels;
    const numberOfFrames = audioData.numberOfFrames;
    const sampleRate = audioData.sampleRate;
    
    // Create AudioBuffer
    const audioBuffer = this.audioContext.createBuffer(
      numberOfChannels,
      numberOfFrames,
      sampleRate
    );
    
    // Copy data to AudioBuffer
    for (let channel = 0; channel < numberOfChannels; channel++) {
      const channelData = new Float32Array(numberOfFrames);
      audioData.copyTo(channelData, { planeIndex: channel });
      audioBuffer.copyToChannel(channelData, channel);
    }
    
    // Schedule playback
    const source = this.audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(this.gainNode);
    
    const now = this.audioContext.currentTime;
    
    // Schedule audio sequentially for smooth playback
    const startTime = Math.max(now, this.scheduledAudioEndTime);
    source.start(startTime);
    this.scheduledAudioEndTime = startTime + audioBuffer.duration;
    
    audioData.close();
  }
  
  #handleAudioSamples(samples, codecConfig) {
    if (!samples || samples.length === 0) return;
    
    const firstSample = samples[0];
    
    // Initialize audio context and decoder if needed
    if (!this.audioContext) {
      this.#initAudio(firstSample.codec, firstSample.sampleRate, firstSample.channelCount);
    }
    
    // Store codec config and initialize decoder
    if (codecConfig && !this.audioCodecConfig) {
      this.audioCodecConfig = codecConfig;
    }
    
    if (!this.audioInitialized && this.audioCodecConfig) {
      this.#initAudioDecoder(
        firstSample.codec, 
        firstSample.sampleRate, 
        firstSample.channelCount, 
        this.audioCodecConfig
      );
    }
    
    if (!this.audioDecoder || this.audioDecoder.state !== 'configured') {
      return;
    }
    
    // Decode all samples in batch
    for (const sample of samples) {
      try {
        const chunk = new EncodedAudioChunk({
          type: sample.isKeyFrame ? 'key' : 'delta',
          timestamp: sample.cts * 1000000, // Convert to microseconds
          data: sample.data,
        });
        this.audioDecoder.decode(chunk);
      } catch (e) {
        // Silently skip failed chunks
      }
    }
  }
  
  #handleAudioSample(sample) {
    // Legacy single sample handler - redirect to batch handler
    this.#handleAudioSamples([sample], null);
  }
  
  #stopAudio() {
    if (this.audioDecoder) {
      try {
        this.audioDecoder.close();
      } catch (e) {}
      this.audioDecoder = null;
    }
    if (this.audioContext) {
      try {
        this.audioContext.close();
      } catch (e) {}
      this.audioContext = null;
    }
    this.gainNode = null;
    this.audioSampleQueue = [];
    this.audioStartTime = null;
    this.videoPlaybackStartTime = null;
    this.firstVideoFrameCts = null;
    this.audioCodecConfig = null;
    this.audioInitialized = false;
    this.scheduledAudioEndTime = 0;
  }

  async #playMPD(mpdUrl) {
    const result = await fetch(mpdUrl);
    if (!result.ok) {
      this.onErrorMsg(`Downloading ${result.url} failed: (${result.status}) ${result.statusText}`);
      this.stop();
      return;
    }
    const manifest = await result.text();
    const parsedManifest = mpdParser.parse(manifest, { url: mpdUrl });

    const vvcPlaylists = parsedManifest.playlists.filter(pl => pl.attributes.CODECS.match(/vv./));
    console.assert(vvcPlaylists.length > 0, "no VVC codec rendition");

    // fix URIs set by mpdParser
    const fixUrl = (url, mpdUrl) => {
      mpdUrl = new URL(mpdUrl, document.location);
      url = new URL(url, mpdUrl);

      return url.toString();
    };
    for (let pl of vvcPlaylists) {
      for (let seg of pl.segments) {
        seg.resolvedUri = fixUrl(seg.uri, mpdUrl);
        seg.map.resolvedUri = fixUrl(seg.map.uri, mpdUrl);
      }
    }

    let i = 0;
    const sortedRenditions = vvcPlaylists.map(pl => new Object({
      bw: pl.attributes.BANDWIDTH,
      res: pl.attributes.RESOLUTION,
      name: pl.attributes.NAME,
      playlistIdx: i++,
    }));
    sortedRenditions.sort((a, b) => a.bw - b.bw); // sort renditions by bandwidth
    for (let i = 0; i < sortedRenditions.length; ++i) {
      sortedRenditions[i].idx = i;
    }

    this.#handleMetadata({
      mpd: {
        renditions: sortedRenditions,
        duration: parsedManifest.duration,
      }
    });

    this.decoderWorker.postMessage({
      cmd: 'startDecoding',
      playlists: vvcPlaylists,
      rendition: this.renditions[this.#renditionIdx ?? this.defaultRenditionIdx()].playlistIdx,
      mpdDuration: parsedManifest.duration,
      numDecThreads: this.numDecoderThreads,
    });
  }


  #onWorkerMessage(e) {
    switch (e.data.cmd) {
      case "initDone":
      case "decoderExited":
        if (this.onReady) {
          this.onReady(e.data.cmd === "initDone");
        }
        break;

      case "decoderStarted":
        this.FrameQueue.start();
        this.FrameDisplayScheduler.start(DEFAULT_FPS);  // start with default FPS, will be updated from MP4 metadata
        break;

      case "out":
        this.onPrintMsg(e.data.text, e.data.noNewLine);
        break;

      case "err":
        this.onErrorMsg(e.data.text, e.data.noNewLine);
        break;

      case "newMp4Metadata":
        // Check for audio
        if (e.data.hasAudio) {
          this.hasAudio = true;
          this.audioCodec = e.data.audioCodec;
          this.audioSampleRate = e.data.audioSampleRate || 48000;
          this.audioChannelCount = e.data.audioChannelCount || 2;
        }
        this.#handleMetadata({ mp4: e.data });
        break;
      
      case "audioSample":
        if (this.#playingStatus === "play") {
          this.#handleAudioSample(e.data.sample);
        }
        break;
      
      case "audioSamples":
        if (this.#playingStatus === "play") {
          this.#handleAudioSamples(e.data.samples, e.data.codecConfig);
        }
        break;

      case "frame":
        if (this.#playingStatus === "stop") {
          this.#releaseFrame(e.data.frame);
          break;
        }

        this.#enqueueNextFrame(e.data.frame);
        break;

      case "EOF":
        if (this.#playingStatus === "stop") {
          break;
        }
        this.FrameQueue.push("EOF");

        // only if running as fast as possible, display remaining frames
        if (this.FrameDisplayScheduler.ignoreTargetFPS) {
          const t = this;
          const flushQueue = function () {
            t.#drawNextFrame();
            if (t.FrameQueue.length) {
              setTimeout(flushQueue, 0);
            }
          };
          flushQueue();
        }
        break;

      case "downloadProgress":
        this.onDownloadProgress(100 * e.data.loaded / e.data.total, !!this.dashDuration);
        break;
    }
  };

  #handleMetadata(data) {
    const mpd = data.mpd;
    if (mpd) {
      this.dashDuration = mpd.duration;
      this.renditions = mpd.renditions;
      if (this.#renditionIdx !== null) {
        this.#renditionIdx = Math.min(Math.max(0, this.#renditionIdx), this.renditions.length - 1);
      }

      if (this.onMetadata) {
        this.onMetadata({
          duration: this.duration,
          dashDuration: this.dashDuration,
          renditions: this.renditions,
        });
      }
    }

    const mp4 = data.mp4;
    if (mp4) {
      this.mp4Duration = mp4.duration;
      this.numFrames = mp4.numFrames;
      this.vidTrackMaxW = mp4.width;
      this.vidTrackMaxH = mp4.height;
      this.FrameDisplayScheduler.start(mp4.fps);

      if (this.onMetadata) {
        this.onMetadata({
          duration: this.duration,
          mp4Duration: this.mp4Duration,
          numFrames: this.numFrames,
          fps: this.fps,
          vidTrackMaxW: this.vidTrackMaxW,
          vidTrackMaxH: this.vidTrackMaxH,
        });
      }
    }
  }

  #enqueueNextFrame(frame) {
    this.FrameQueue.push(frame);

    if (this.FrameDisplayScheduler.ignoreTargetFPS) {
      // playback as fast as possible (bypass animationCallback())
      this.#drawNextFrame();
    }
  }

  #drawNextFrame() {
    if (this.#playingStatus !== "play") {
      return;
    }

    const frame = this.FrameQueue.take();
    if (!frame) {
      return "buffering";
    }

    if (frame === "EOF") {
      this.playingStatus = "stop";

      if (!this.onEOF?.()) {  // don't clear renderer if onEOF callback returned true
        this.renderer?.clear();
      }
      return "EOF";
    }

    this.#drawThreeJS(
      frame.y, frame.u, frame.v,
      frame.width, frame.height,
      frame.width / 2, frame.height / 2,
      frame.strideY, frame.strideUV,
      frame.bitDepth);

    this.#releaseFrame(frame);

    if (this.onDrawFrame) {
      this.onDrawFrame({
        width: frame.width,
        height: frame.height,
        cts: frame.cts,
        extra: frame.extra,
      });
    }

    return;
  }

  #releaseFrame(frame) {
    const isSAB = frame.y.buffer instanceof SharedArrayBuffer;
    this.decoderWorker.postMessage({
      cmd: 'releaseFrame',
      planes: [frame.y, frame.u, frame.v]
    },
      isSAB ? undefined : [frame.y.buffer, frame.u.buffer, frame.v.buffer]  // only transfer ownership, if not SharedArrayBuffer
    );
  }


  FrameDisplayScheduler = {
    frameScheduleIntervalID: undefined,             // the Interval to display frames at requested FPS rate
    targetFPS: undefined,                           // the FPS at which to try displaying frames
    ignoreTargetFPS: undefined,                     // benchmarking: ignore the targetFPS read from the mp4
    firstFrameTS: undefined,                        // timestamp of the first displayed frame after buffering, to calculate following display times
    frameCount: undefined,                          // number of frames since the last buffering, to calculate FPS
    prevTS: undefined,

    player: undefined,

    start: function (targetFPS) {
      if (targetFPS && targetFPS === this.targetFPS && this.frameScheduleIntervalID) {
        return;
      }
      if (typeof targetFPS !== "undefined") {
        this.targetFPS = targetFPS;
      }
      this.firstFrameTS = 0;
      this.frameCount = 0;

      if (this.ignoreTargetFPS) {
        // playback as fast as possible (bypass animationCallback())
        this.player.#drawNextFrame();
      }
      else if (!this.frameScheduleIntervalID) {
        this.scheduleCB();
      }
    },

    scheduleCB: function () {
      this.frameScheduleIntervalID = requestAnimationFrame((ts) => { this.animationCallback(ts); });
    },

    animationCallback: function (timestamp) {
      // it's not time to draw the next frame, yet
      if (this.firstFrameTS && (timestamp < this.firstFrameTS + 1000 * this.frameCount / this.targetFPS)) {
        this.scheduleCB();
        return;
      }

      // multiple callbacks within the same frame
      if (this.prevTS === timestamp) {
        this.scheduleCB();
        return;
      }
      this.prevTS = timestamp;

      const ret = this.player.#drawNextFrame();
      if (ret === "EOF" || this.player.playingStatus !== "play") { // end of file reached. stop animationCallback
        this.frameScheduleIntervalID = undefined;
        this.firstFrameTS = undefined;
        this.frameCount = 0;
        return;
      }

      if (ret === "buffering") {
        this.firstFrameTS = 0;
        this.frameCount = 0;
      }
      else {
        if (!this.firstFrameTS) {
          this.firstFrameTS = timestamp;
        }
        ++this.frameCount;
      }

      this.scheduleCB();
      return;
    }
  };


  FrameQueue = {
    queue: [],                          // decoded frames to display
    queueLengthTarget: 33,               // request this many new frames from the decoderWorker. grows when the queue underruns
    queueLengthMax: 33,                 // never grow queueLengthTarget grows, beyond this limit
    frameRequestsOutstanding: 0,        // don't request new frames when this.queue.length + frameRequestsOutstanding > queueLengthTarget
    frameRequestsOutstandingMax: 10,    // limit outstanding frame requests, to ensure the decoder does not run OOM before we have processed them
    buffering: true,                    // fillig the queue, to display frames smoothly

    player: undefined,

    get isFull() { return this.queue.length >= this.queueLengthTarget; },
    get length() { return this.queue.length; },

    start: function () {
      this.buffering = true;
      this.requestFrames();
    },

    push: function (frame) {
      console.assert(this.queue.length <= this.queueLengthTarget, `frame queue (${this.queue.length}) shouldn't be longer than ${this.queueLengthTarget}`);
      this.queue.push(frame);
      if (frame !== "EOF") {  // EOF is sent without being requested
        --this.frameRequestsOutstanding;
      }
      // console.log(`push ${this.queue.length} + ${this.frameRequestsOutstanding}`)

      this.requestFrames();

      if (this.isFull || frame === "EOF") {
        this.buffering = false;
      }
    },

    take: function () {
      if (this.buffering) {
        this.requestFrames();
        return;
      }

      const frame = this.queue.shift();
      if (frame) {
        this.requestFrames();
        return frame;
      }
      console.warn(`no frame (${this.queueLengthTarget})`);

      this.startBuffering();
    },

    clear: function (doWarn) {
      while (this.queue.length) {
        if (doWarn) {
          console.warn(`queue not empty ${this.queue.length}`);
        }
        const frame = this.queue.shift();
        this.player.#releaseFrame(frame);
      }
      this.frameRequestsOutstanding = 0;
    },

    startBuffering: function () {
      this.buffering = true;

      // increase queue length
      this.queueLengthTarget = Math.floor(Math.min(this.queueLengthMax, this.queueLengthTarget * 1.5));
      this.player.onPrintMsg(`buffering. (qlen: ${this.queueLengthTarget})`);

      this.requestFrames();
    },

    requestFrames: function () {
      console.assert(this.frameRequestsOutstanding >= 0, `frameRequestsOutstanding ${this.frameRequestsOutstanding} shouldn't be negative`);
      while (this.frameRequestsOutstanding < this.frameRequestsOutstandingMax
        && this.queue.length + this.frameRequestsOutstanding < this.queueLengthTarget
        && this.frameRequestsOutstanding >= 0) {

        this.player.decoderWorker.postMessage({ cmd: 'requestFrame' });
        ++this.frameRequestsOutstanding;
      }

      if (this.isFull) {
        this.buffering = false;
      }
    },
  };

  // const renderer = new THREE.WebGLRenderer();
  renderer = undefined;
  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-0.5, 0.5, -0.5, 0.5, 0.1, 10);
  material = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    glslVersion: THREE.GLSL3,
    uniforms: {
      textureY: { type: "t", value: undefined },
      textureU: { type: "t", value: undefined },
      textureV: { type: "t", value: undefined },
      bitDepth: { value: undefined },
      yuv2rgbMat: { value: BT709_yuv2rgb }
    }
  });

  async toggleFullScreen() {
    if (!document.fullscreenElement) {
      await canvas.requestFullscreen();
    }
    else {
      await document.exitFullscreen();
    }

    this.needWebGlReinit = true;
  }

  #setupScene(yW, yH, uvW, uvH, strideY, strideUV, bitDepth, bytesPerPixel) {
    if (!this.renderer) {
      this.camera.position.z = 1;
      this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, depth: false });
      this.renderer.autoClear = false;
      this.renderer.setClearAlpha(0);    // so we can use renderer.clear() on stop to display the VVC logo background
    }

    const useFixedSize = this.displaySizeFixed && !document.fullscreenElement && this.vidTrackMaxW && this.vidTrackMaxH;
    const displayW = useFixedSize ? this.vidTrackMaxW : yW;
    const displayH = useFixedSize ? this.vidTrackMaxH : yH;

    this.renderer.setSize(yW, yH, !useFixedSize);
    if (useFixedSize) {
      this.canvas.style.width = displayW + 'px';
      this.canvas.style.height = displayH + 'px';
    } else if (document.fullscreenElement) {
      const canvasAspect = this.canvas.clientWidth / this.canvas.clientHeight;
      const videoAspect = yW / yH;

      if (videoAspect < canvasAspect) {
        this.canvas.style.height = '100%';
        this.canvas.style.width = canvas.clientHeight * videoAspect + 'px';
      }
      else {
        this.canvas.style.width = '100%';
        this.canvas.style.height = canvas.clientWidth / videoAspect + 'px';
      }
    }

    const player = this;
    window.onresize = function () {
      // this is only needed to adapt the video size, when not playing. When playing it will be fixed on the next draw call
      if (player.playingStatus !== "play" && player.canvas.clientWidth <= displayW) {
        player.canvas.style.height = (player.canvas.clientWidth * yH / yW) + 'px';
      }
    };

    let pixFmt = THREE.UnsignedByteType;
    if (bitDepth > 8) {
      pixFmt = THREE.UnsignedShortType;
    }
    if (bytesPerPixel === 2) {
      pixFmt = THREE.UnsignedShortType;
    }

    // release old textures
    const uniforms = this.material.uniforms;
    uniforms.textureY.value?.dispose();
    uniforms.textureU.value?.dispose();
    uniforms.textureV.value?.dispose();

    // allocate new textures
    let textureY, textureU, textureV;
    if (pixFmt === THREE.UnsignedByteType) {
      textureY = new THREE.DataTexture(new Uint8Array(), strideY, yH, THREE.RedIntegerFormat, pixFmt);
      textureU = new THREE.DataTexture(new Uint8Array(), strideUV, uvH, THREE.RedIntegerFormat, pixFmt);
      textureV = new THREE.DataTexture(new Uint8Array(), strideUV, uvH, THREE.RedIntegerFormat, pixFmt);

      textureY.internalFormat = 'R8UI';
      textureU.internalFormat = 'R8UI';
      textureV.internalFormat = 'R8UI';
    }
    else {
      textureY = new THREE.DataTexture(new Uint16Array(), strideY, yH, THREE.RedIntegerFormat, pixFmt);
      textureU = new THREE.DataTexture(new Uint16Array(), strideUV, uvH, THREE.RedIntegerFormat, pixFmt);
      textureV = new THREE.DataTexture(new Uint16Array(), strideUV, uvH, THREE.RedIntegerFormat, pixFmt);

      textureY.internalFormat = 'R16UI';
      textureU.internalFormat = 'R16UI';
      textureV.internalFormat = 'R16UI';
    }
    // set new textures for material
    uniforms.textureY.value = textureY;
    uniforms.textureU.value = textureU;
    uniforms.textureV.value = textureV;
    uniforms.bitDepth.value = bitDepth;

    const geometry = new THREE.PlaneGeometry();
    geometry.setAttribute("uv", new THREE.BufferAttribute(new Float32Array([0, 1, yW / strideY, 1, 0, 0, yW / strideY, 0]), 2));
    geometry.setAttribute("uv2", new THREE.BufferAttribute(new Float32Array([0, 1, uvW / strideUV, 1, 0, 0, uvW / strideUV, 0]), 2));

    this.scene.add(new THREE.Mesh(geometry, this.material));

    this.needWebGlReinit = false;
  }

  #drawThreeJS(planeY, planeU, planeV, yW, yH, uvW, uvH, strideY, strideUV, bitDepth, bytesPerPixel) {
    if (yW !== this.vidFrameW || yH !== this.vidFrameH || bitDepth !== this.vidBitDepth) {
      this.vidFrameW = yW;
      this.vidFrameH = yH;
      this.vidBitDepth = bitDepth;

      for (let c of this.scene.children) {
        this.scene.remove(c);
        c.geometry.dispose();
      }

      this.needWebGlReinit = true;
    }

    if (this.outputDisabled) {
      return;
    }

    if (this.needWebGlReinit) {
      this.#setupScene(yW, yH, uvW, uvH, strideY, strideUV, bitDepth, bytesPerPixel);
    }

    // update aspect ratio of renderer
    const canvasAspect = this.canvas.clientWidth / this.canvas.clientHeight;
    const videoAspect = yW / yH;
    if (!document.fullscreenElement && Math.abs(canvasAspect - videoAspect) > 0.01) {
      const useFixedSize = this.displaySizeFixed && !document.fullscreenElement && this.vidTrackMaxW && this.vidTrackMaxH;

      this.renderer.setSize(yW, this.canvas.clientWidth / videoAspect, !useFixedSize);

      if (useFixedSize) {
        this.canvas.style.width = this.vidTrackMaxW + 'px';
        this.canvas.style.height = this.canvas.clientWidth / videoAspect + 'px';
      }
    }

    const textureY = this.material.uniforms.textureY.value;
    const textureU = this.material.uniforms.textureU.value;
    const textureV = this.material.uniforms.textureV.value;

    textureY.image.data = planeY;
    textureU.image.data = planeU;
    textureV.image.data = planeV;
    textureY.needsUpdate = true;
    textureU.needsUpdate = true;
    textureV.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);
  }

} // class VVCPlayer

// const yuvFile = "/image_1080p_10b.yuv";
// const w = 1920;
// const h = 1080;
// const b = 10;

// // const yuvFile = "/image_1080p_8b.yuv";
// // const w = 1920;
// // const h = 1080;
// // const b = 8;

// fetch(yuvFile).then(async function (response) {
//   const buf = await response.arrayBuffer();
//   const ArrayT = (b === 8 ? Uint8Array : Uint16Array);
//   const bpp = (b === 8 ? 1 : 2);

//   const drawLoop = function () {
//     // start fps measurement
//     if (!MeasureFPS.isStarted) {
//       MeasureFPS.start();
//     }


//     drawThreeJS(
//       new ArrayT(buf, 0, w * h),
//       new ArrayT(buf, bpp * (w * h), (w / 2 * h / 2)),
//       new ArrayT(buf, bpp * (w * h + w / 2 * h / 2), (w / 2 * h / 2)),
//       w, h,
//       w / 2, h / 2,
//       w, w / 2,
//       b);


//     // update FPS counter
//     MeasureFPS.addFrame();

//     // loop
//     if (this.playingStatus === undefined)
//       setTimeout(drawLoop, 0);
//   };

//   this.playingStatus = undefined;
//   updateStatusDisplay({ resolution: `${w}x${h}` });
//   drawLoop();
// });

const vertexShader = `
attribute vec2 uv2;

out highp vec2 lumaCoord;
out highp vec2 chromaCoord;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  lumaCoord = uv;
  chromaCoord = uv2;
}`;

const fragmentShader = `
precision highp usampler2D;

uniform usampler2D textureY;
uniform usampler2D textureU;
uniform usampler2D textureV;
uniform int bitDepth;
uniform mat3 yuv2rgbMat;

varying highp vec2 lumaCoord;
varying highp vec2 chromaCoord;

out vec4 fragmentColor;

void main() {
  int bdShift = bitDepth - 8;

  int lumaOffset   =  16 << bdShift;
  int chromaOffset = 128 << bdShift;

  int lumaRange   = (235 - 16) << bdShift;
  int chromaRange = (240 - 16) << bdShift;

  float lumaScale   = 1.0 / float(  lumaRange);
  float chromaScale = 1.0 / float(chromaRange);

  // convert texture to int first, because direct unsigned to float conversion gives linker errors on Windows (using Angle)
  vec3 yuv = vec3(
    float( int(texture2D(textureY,   lumaCoord)[0]) -   lumaOffset ) *   lumaScale,
    float( int(texture2D(textureU, chromaCoord)[0]) - chromaOffset ) * chromaScale,
    float( int(texture2D(textureV, chromaCoord)[0]) - chromaOffset ) * chromaScale
  );

  fragmentColor = vec4( yuv2rgbMat * yuv, 1.0 );
}`;

const BT601_yuv2rgb = new THREE.Matrix3().set(
  1.0, 0.0, 1.402,
  1.0, -0.344, -0.7141,
  1.0, 1.772, 0.0
);

const BT709_yuv2rgb = new THREE.Matrix3().set(
  1.0, 0.0, 1.5748,
  1.0, -0.1873, -0.4681,
  1.0, 1.8556, 0.0
);
