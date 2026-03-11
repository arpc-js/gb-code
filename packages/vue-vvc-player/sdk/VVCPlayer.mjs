/**
 * VVCPlayer - H.266/VVC Web播放器
 * 使用 decoderWorker 进行 WASM 解码
 */

const DEFAULT_FPS = 50;

export default class VVCPlayer {
  decoderWorker;
  numDecoderThreads = 10;
  mp4Duration;
  numFrames;
  _playingStatus = "stop";
  vidFrameH; vidFrameW; vidBitDepth;
  displaySizeFixed = false;
  
  DEFAULT_FPS = DEFAULT_FPS;
  hasAudio = false;
  
  // 音频相关属性
  audioContext = null;
  audioDecoder = null;
  audioSampleQueue = [];
  audioStartTime = null;
  audioMuted = false;
  audioVolume = 1.0;
  gainNode = null;
  audioCodec = null;
  audioSampleRate = 48000;
  audioChannelCount = 2;
  audioCodecConfig = null;
  audioInitialized = false;
  scheduledAudioEndTime = 0;

  onPrintMsg = (m) => console.log(m);
  onErrorMsg = (m) => console.error(m);
  onReady = undefined;
  onEOF = undefined;
  onMetadata = undefined;
  onDownloadProgress = undefined;
  onDrawFrame = undefined;
  onStatusChange = undefined;

  get playingStatus() { return this._playingStatus; }
  set playingStatus(status) {
    this._playingStatus = status;
    if (this.onStatusChange) this.onStatusChange(status);
  }

  get duration() { return this.mp4Duration; }
  get fps() { return this.FrameDisplayScheduler.targetFPS; }

  constructor(canvas, appPath, options = {}) {
    // 修复路径 - 确保末尾有斜杠
    if (!appPath.endsWith('/')) appPath += '/';
    
    // Worker 路径
    const workerPath = options.workerPath || (appPath + 'decoderWorker.js');
    
    this.decoderWorker = new Worker(workerPath);
    const t = this;
    this.decoderWorker.onmessage = e => t._onWorkerMessage(e);
    this.decoderWorker.postMessage({ cmd: 'init', appPath: appPath });

    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.FrameQueue.player = this;
    this.FrameDisplayScheduler.player = this;
  }

  play(url, repeat) {
    this.playingStatus = "play";
    this.mp4Duration = null;
    this.FrameQueue.clear(true);

    this.decoderWorker.postMessage({
      cmd: 'startDecoding',
      url: url,
      repeat: repeat,
      numDecThreads: this.numDecoderThreads,
    });
  }

  pause() {
    this.playingStatus = "pause";
  }

  continue() {
    this.playingStatus = "play";
    this.FrameQueue.start();
    this.FrameDisplayScheduler.start();
  }

  stop() {
    this.playingStatus = "stop";
    this.decoderWorker.postMessage({ cmd: 'stop' });
    this.FrameQueue.clear();
    this._stopAudio();
  }

  // 销毁播放器，释放所有资源
  destroy() {
    this.stop();
    if (this.decoderWorker) {
      this.decoderWorker.terminate();
      this.decoderWorker = null;
    }
    this.FrameDisplayScheduler.frameScheduleIntervalID = undefined;
  }

  // 音频控制方法
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
  
  _initAudio(codec, sampleRate, channelCount) {
    if (this.audioContext) {
      this._stopAudio();
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
      
      if (typeof AudioDecoder !== 'undefined' && codec) {
        this._initAudioDecoder(codec, sampleRate, channelCount);
      }
      
      console.log(`Audio initialized: ${codec} ${sampleRate}Hz ${channelCount}ch`);
    } catch (e) {
      console.error('Failed to initialize audio:', e);
    }
  }
  
  _initAudioDecoder(codec, sampleRate, channelCount, codecConfig) {
    try {
      let codecString = codec;
      
      this.audioDecoder = new AudioDecoder({
        output: (audioData) => {
          this._handleDecodedAudio(audioData);
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
      
      if (codecConfig) {
        config.description = codecConfig;
      }
      
      this.audioDecoder.configure(config);
      this.audioInitialized = true;
      
      console.log('AudioDecoder initialized with codec:', codecString);
    } catch (e) {
      console.warn('AudioDecoder not supported:', e);
      this.audioDecoder = null;
      this.audioInitialized = false;
    }
  }
  
  _handleDecodedAudio(audioData) {
    if (!this.audioContext || this.playingStatus !== 'play') {
      audioData.close();
      return;
    }
    
    const numberOfChannels = audioData.numberOfChannels;
    const numberOfFrames = audioData.numberOfFrames;
    const sampleRate = audioData.sampleRate;
    
    const audioBuffer = this.audioContext.createBuffer(
      numberOfChannels,
      numberOfFrames,
      sampleRate
    );
    
    for (let channel = 0; channel < numberOfChannels; channel++) {
      const channelData = new Float32Array(numberOfFrames);
      audioData.copyTo(channelData, { planeIndex: channel });
      audioBuffer.copyToChannel(channelData, channel);
    }
    
    const source = this.audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(this.gainNode);
    
    const now = this.audioContext.currentTime;
    const startTime = Math.max(now, this.scheduledAudioEndTime);
    source.start(startTime);
    this.scheduledAudioEndTime = startTime + audioBuffer.duration;
    
    audioData.close();
  }
  
  _handleAudioSamples(samples, codecConfig) {
    if (!samples || samples.length === 0) return;
    
    const firstSample = samples[0];
    
    if (!this.audioContext) {
      this._initAudio(firstSample.codec, firstSample.sampleRate, firstSample.channelCount);
    }
    
    if (codecConfig && !this.audioCodecConfig) {
      this.audioCodecConfig = codecConfig;
    }
    
    if (!this.audioInitialized && this.audioCodecConfig) {
      this._initAudioDecoder(
        firstSample.codec, 
        firstSample.sampleRate, 
        firstSample.channelCount, 
        this.audioCodecConfig
      );
    }
    
    if (!this.audioDecoder || this.audioDecoder.state !== 'configured') {
      return;
    }
    
    for (const sample of samples) {
      try {
        const chunk = new EncodedAudioChunk({
          type: sample.isKeyFrame ? 'key' : 'delta',
          timestamp: sample.cts * 1000000,
          data: sample.data,
        });
        this.audioDecoder.decode(chunk);
      } catch (e) {
        // Skip failed chunks
      }
    }
  }
  
  _stopAudio() {
    if (this.audioDecoder) {
      try { this.audioDecoder.close(); } catch (e) {}
      this.audioDecoder = null;
    }
    if (this.audioContext) {
      try { this.audioContext.close(); } catch (e) {}
      this.audioContext = null;
    }
    this.gainNode = null;
    this.audioSampleQueue = [];
    this.audioStartTime = null;
    this.audioCodecConfig = null;
    this.audioInitialized = false;
    this.scheduledAudioEndTime = 0;
  }

  _onWorkerMessage(e) {
    switch (e.data.cmd) {
      case "initDone":
      case "decoderExited":
        if (this.onReady) this.onReady(e.data.cmd === "initDone");
        break;

      case "decoderStarted":
        this.FrameQueue.start();
        this.FrameDisplayScheduler.start(DEFAULT_FPS);
        break;

      case "out":
        this.onPrintMsg(e.data.text);
        break;

      case "err":
        this.onErrorMsg(e.data.text);
        break;

      case "newMp4Metadata":
        this.mp4Duration = e.data.duration;
        this.numFrames = e.data.numFrames;
        this.hasAudio = e.data.hasAudio || false;
        this.FrameDisplayScheduler.start(e.data.fps);
        if (this.onMetadata) {
          this.onMetadata({
            duration: this.duration,
            numFrames: this.numFrames,
            fps: this.fps,
            width: e.data.width,
            height: e.data.height,
            hasAudio: this.hasAudio,
          });
        }
        break;

      case "audioSamples":
        if (this._playingStatus === "play") {
          this._handleAudioSamples(e.data.samples, e.data.codecConfig);
        }
        break;

      case "frame":
        if (this._playingStatus === "stop") {
          this._releaseFrame(e.data.frame);
          break;
        }
        this._enqueueNextFrame(e.data.frame);
        break;

      case "EOF":
        if (this._playingStatus === "stop") break;
        this.FrameQueue.push("EOF");
        break;

      case "downloadProgress":
        if (this.onDownloadProgress) {
          this.onDownloadProgress(100 * e.data.loaded / e.data.total, false);
        }
        break;
    }
  }

  _enqueueNextFrame(frame) {
    this.FrameQueue.push(frame);
  }

  _drawNextFrame() {
    if (this._playingStatus !== "play") return;

    const frame = this.FrameQueue.take();
    if (!frame) return "buffering";

    if (frame === "EOF") {
      this.playingStatus = "stop";
      if (this.onEOF) this.onEOF();
      return "EOF";
    }

    // 使用 Canvas 2D 渲染 YUV
    this._drawCanvas2D(frame);
    this._releaseFrame(frame);

    if (this.onDrawFrame) {
      this.onDrawFrame({ width: frame.width, height: frame.height, cts: frame.cts });
    }
  }

  _drawCanvas2D(frame) {
    const { y, u, v, width, height, strideY, strideUV, bitDepth } = frame;
    
    // 调整 canvas 尺寸
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
    
    const imageData = this.ctx.createImageData(width, height);
    const rgb = imageData.data;
    const shift = bitDepth > 8 ? (bitDepth - 8) : 0;
    
    let rgbIndex = 0;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const yIndex = j * strideY + i;
        const uvJ = Math.floor(j / 2);
        const uvI = Math.floor(i / 2);
        const uvIndex = uvJ * strideUV + uvI;
        
        const Y = (y[yIndex] >> shift) - 16;
        const U = (u[uvIndex] >> shift) - 128;
        const V = (v[uvIndex] >> shift) - 128;
        
        // BT.709 YUV to RGB
        rgb[rgbIndex++] = Math.max(0, Math.min(255, 1.164 * Y + 1.793 * V));
        rgb[rgbIndex++] = Math.max(0, Math.min(255, 1.164 * Y - 0.213 * U - 0.533 * V));
        rgb[rgbIndex++] = Math.max(0, Math.min(255, 1.164 * Y + 2.112 * U));
        rgb[rgbIndex++] = 255;
      }
    }
    
    this.ctx.putImageData(imageData, 0, 0);
  }

  _releaseFrame(frame) {
    this.decoderWorker.postMessage({
      cmd: 'releaseFrame',
      planes: [frame.y, frame.u, frame.v]
    }, [frame.y.buffer, frame.u.buffer, frame.v.buffer]);
  }

  async toggleFullScreen() {
    if (!document.fullscreenElement) {
      await this.canvas.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  }

  FrameDisplayScheduler = {
    frameScheduleIntervalID: undefined,
    targetFPS: undefined,
    firstFrameTS: undefined,
    frameCount: undefined,
    prevTS: undefined,
    player: undefined,

    start: function (targetFPS) {
      if (targetFPS && targetFPS === this.targetFPS && this.frameScheduleIntervalID) return;
      if (typeof targetFPS !== "undefined") this.targetFPS = targetFPS;
      this.firstFrameTS = 0;
      this.frameCount = 0;
      if (!this.frameScheduleIntervalID) this.scheduleCB();
    },

    scheduleCB: function () {
      this.frameScheduleIntervalID = requestAnimationFrame((ts) => { this.animationCallback(ts); });
    },

    animationCallback: function (timestamp) {
      if (this.firstFrameTS && (timestamp < this.firstFrameTS + 1000 * this.frameCount / this.targetFPS)) {
        this.scheduleCB();
        return;
      }
      if (this.prevTS === timestamp) { this.scheduleCB(); return; }
      this.prevTS = timestamp;

      const ret = this.player._drawNextFrame();
      if (ret === "EOF" || this.player.playingStatus !== "play") {
        this.frameScheduleIntervalID = undefined;
        this.firstFrameTS = undefined;
        this.frameCount = 0;
        return;
      }

      if (ret === "buffering") {
        this.firstFrameTS = 0;
        this.frameCount = 0;
      } else {
        if (!this.firstFrameTS) this.firstFrameTS = timestamp;
        ++this.frameCount;
      }
      this.scheduleCB();
    }
  };

  FrameQueue = {
    queue: [],
    queueLengthTarget: 33,
    queueLengthMax: 33,
    frameRequestsOutstanding: 0,
    frameRequestsOutstandingMax: 10,
    buffering: true,
    player: undefined,

    get isFull() { return this.queue.length >= this.queueLengthTarget; },
    get length() { return this.queue.length; },

    start: function () {
      this.buffering = true;
      this.requestFrames();
    },

    push: function (frame) {
      this.queue.push(frame);
      if (frame !== "EOF") --this.frameRequestsOutstanding;
      this.requestFrames();
      if (this.isFull || frame === "EOF") this.buffering = false;
    },

    take: function () {
      if (this.buffering) { this.requestFrames(); return; }
      const frame = this.queue.shift();
      if (frame) { this.requestFrames(); return frame; }
      console.warn(`no frame (${this.queueLengthTarget})`);
      this.startBuffering();
    },

    clear: function (doWarn) {
      while (this.queue.length) {
        if (doWarn) console.warn(`queue not empty ${this.queue.length}`);
        const frame = this.queue.shift();
        if (frame !== "EOF") this.player._releaseFrame(frame);
      }
      this.frameRequestsOutstanding = 0;
    },

    startBuffering: function () {
      this.buffering = true;
      this.queueLengthTarget = Math.floor(Math.min(this.queueLengthMax, this.queueLengthTarget * 1.5));
      this.player.onPrintMsg(`buffering. (qlen: ${this.queueLengthTarget})`);
      this.requestFrames();
    },

    requestFrames: function () {
      while (this.frameRequestsOutstanding < this.frameRequestsOutstandingMax
        && this.queue.length + this.frameRequestsOutstanding < this.queueLengthTarget
        && this.frameRequestsOutstanding >= 0) {
        this.player.decoderWorker.postMessage({ cmd: 'requestFrame' });
        ++this.frameRequestsOutstanding;
      }
      if (this.isFull) this.buffering = false;
    },
  };
}
