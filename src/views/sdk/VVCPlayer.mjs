/**
 * VVCPlayer - 单线程 H.266/VVC 播放器
 * 使用 vvdecapp.wasm 进行解码
 */

export default class VVCPlayer {
  constructor(canvas, appPath, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.appPath = appPath;
    this.options = options;
    
    // 状态
    this.playingStatus = 'stop'; // stop, play, pause
    this.hasAudio = false;
    this.duration = 0;
    this.fps = 30;
    this.numDecoderThreads = 1;
    this.displaySizeFixed = true;
    
    // 解码器
    this.decoder = null;
    this.frames = [];
    this.currentFrame = 0;
    this.animationId = null;
    this.lastFrameTime = 0;
    
    // 回调
    this.onReady = null;
    this.onStatusChange = null;
    this.onDrawFrame = null;
    this.onMetadata = null;
    this.onEOF = null;
    this.onDownloadProgress = null;
    this.onPrintMsg = null;
    this.onErrorMsg = null;
    
    // 初始化
    this._init();
  }
  
  async _init() {
    try {
      // 动态导入 vvdec WASM 模块
      const vvdecModule = await import('./vvdecapp.js');
      
      // WASM 文件从 public/sdk/ 加载
      const wasmBasePath = '/sdk/';
      
      // 初始化 vvdec
      if (typeof vvdecModule.default === 'function') {
        this.decoder = await vvdecModule.default({
          locateFile: (path) => wasmBasePath + path
        });
      } else if (vvdecModule.createVVdeCModule) {
        this.decoder = await vvdecModule.createVVdeCModule({
          locateFile: (path) => wasmBasePath + path
        });
      } else {
        this.decoder = vvdecModule;
      }
      
      this.onPrintMsg?.('VVdec WASM 已加载');
      this.onReady?.(true);
      
    } catch (e) {
      console.error('VVdec 初始化失败:', e);
      this.onErrorMsg?.('解码器加载失败: ' + e.message);
    }
  }
  
  async play(url, repeat = 1) {
    if (!this.decoder) {
      this.onErrorMsg?.('解码器未就绪');
      return;
    }
    
    try {
      this.playingStatus = 'play';
      this.onStatusChange?.();
      
      // 下载视频
      this.onPrintMsg?.('下载视频...');
      const response = await fetch(url);
      if (!response.ok) throw new Error('视频下载失败: ' + response.status);
      
      const total = parseInt(response.headers.get('content-length') || '0');
      const reader = response.body.getReader();
      const chunks = [];
      let loaded = 0;
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        loaded += value.length;
        if (total > 0) {
          this.onDownloadProgress?.(Math.round(loaded / total * 100), false);
        }
      }
      
      const vvcData = new Uint8Array(loaded);
      let offset = 0;
      for (const chunk of chunks) {
        vvcData.set(chunk, offset);
        offset += chunk.length;
      }
      
      this.onPrintMsg?.(`下载完成: ${vvcData.length} 字节`);
      this.onDownloadProgress?.(100, false);
      
      // 解码
      await this._decode(vvcData);
      
      // 播放
      if (this.frames.length > 0) {
        this._startRender();
      }
      
    } catch (e) {
      this.playingStatus = 'stop';
      this.onStatusChange?.();
      this.onErrorMsg?.(e.message);
    }
  }
  
  async _decode(vvcData) {
    this.onPrintMsg?.('开始解码...');
    this.frames = [];
    
    // 使用 vvdec 解码
    // 注意：具体 API 取决于 vvdecapp.js 的实现
    if (this.decoder._vvdec_decode) {
      // Emscripten 绑定方式
      const ptr = this.decoder._malloc(vvcData.length);
      this.decoder.HEAPU8.set(vvcData, ptr);
      
      const result = this.decoder._vvdec_decode(ptr, vvcData.length);
      this.decoder._free(ptr);
      
      if (result < 0) {
        throw new Error('解码失败');
      }
    } else if (this.decoder.decode) {
      // 高级 API
      const result = await this.decoder.decode(vvcData);
      if (result && result.frames) {
        for (const frame of result.frames) {
          const imageData = this._yuv2rgb(frame);
          this.frames.push(imageData);
        }
        
        if (!this.displaySizeFixed && result.width && result.height) {
          this.canvas.width = result.width;
          this.canvas.height = result.height;
        }
        
        this.onMetadata?.({ width: result.width, height: result.height });
      }
    } else {
      throw new Error('不支持的 vvdec API');
    }
    
    this.onPrintMsg?.(`解码完成: ${this.frames.length} 帧`);
  }
  
  _yuv2rgb(frame) {
    const { y, u, v, width, height } = frame;
    const imageData = this.ctx.createImageData(width, height);
    const rgb = imageData.data;
    
    let rgbIndex = 0;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const yIndex = j * width + i;
        const uvIndex = Math.floor(j / 2) * Math.floor(width / 2) + Math.floor(i / 2);
        
        const Y = y[yIndex];
        const U = u[uvIndex] - 128;
        const V = v[uvIndex] - 128;
        
        rgb[rgbIndex++] = Math.max(0, Math.min(255, Y + 1.402 * V));
        rgb[rgbIndex++] = Math.max(0, Math.min(255, Y - 0.344 * U - 0.714 * V));
        rgb[rgbIndex++] = Math.max(0, Math.min(255, Y + 1.772 * U));
        rgb[rgbIndex++] = 255;
      }
    }
    
    return imageData;
  }
  
  _startRender() {
    this.currentFrame = 0;
    this.lastFrameTime = performance.now();
    
    const frameDuration = 1000 / this.fps;
    
    const render = () => {
      if (this.playingStatus !== 'play') return;
      
      const now = performance.now();
      if (now - this.lastFrameTime >= frameDuration) {
        if (this.currentFrame < this.frames.length) {
          const frame = this.frames[this.currentFrame];
          this.ctx.putImageData(frame, 0, 0);
          
          this.onDrawFrame?.({
            width: frame.width,
            height: frame.height,
            frameIndex: this.currentFrame
          });
          
          this.currentFrame++;
          this.lastFrameTime = now;
        } else {
          // 播放结束，循环
          this.currentFrame = 0;
          this.onEOF?.();
        }
      }
      
      this.animationId = requestAnimationFrame(render);
    };
    
    render();
  }
  
  pause() {
    this.playingStatus = 'pause';
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.onStatusChange?.();
  }
  
  continue() {
    if (this.playingStatus === 'pause' && this.frames.length > 0) {
      this.playingStatus = 'play';
      this.onStatusChange?.();
      this._startRender();
    }
  }
  
  stop() {
    this.playingStatus = 'stop';
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.frames = [];
    this.currentFrame = 0;
    this.onStatusChange?.();
  }
  
  toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      this.canvas.requestFullscreen();
    }
  }
  
  setVolume(volume) {
    // 暂不支持音频
  }
  
  setMuted(muted) {
    // 暂不支持音频
  }
}
