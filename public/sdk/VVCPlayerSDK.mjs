/**
 * VVC Player SDK
 * 轻量级 VVC/H.266 Web 播放器 SDK
 * 
 * 使用方法:
 * import { createVVCPlayer } from './sdk/VVCPlayerSDK.mjs';
 * const player = await createVVCPlayer(canvasElement, options);
 * player.play(url);
 */

// SDK 基础路径（相对于 SDK 目录）
let SDK_BASE_PATH = '';

/**
 * 注册 Service Worker 启用 SharedArrayBuffer
 * @param {string} swPath - Service Worker 路径
 * @returns {Promise<boolean>} - 是否需要刷新页面
 */
export async function enableSharedArrayBuffer(swPath) {
  if (window.crossOriginIsolated) {
    return false; // 已经启用
  }
  
  if (!('serviceWorker' in navigator)) {
    console.warn('Service Worker not supported');
    return false;
  }
  
  try {
    await navigator.serviceWorker.register(swPath || './coi-serviceworker.js');
    console.log('Service Worker registered, page will reload...');
    window.location.reload();
    return true;
  } catch (err) {
    console.warn('Service Worker registration failed:', err);
    return false;
  }
}

/**
 * 设置 SDK 基础路径
 * @param {string} path - SDK 文件所在目录路径
 */
export function setSDKBasePath(path) {
  SDK_BASE_PATH = path.endsWith('/') ? path : path + '/';
}

/**
 * 获取 SDK 基础路径
 */
export function getSDKBasePath() {
  if (!SDK_BASE_PATH) {
    // 自动检测路径
    const scripts = document.querySelectorAll('script[type="module"]');
    for (const script of scripts) {
      if (script.src && script.src.includes('VVCPlayerSDK')) {
        SDK_BASE_PATH = script.src.replace(/VVCPlayerSDK\.mjs.*$/, '');
        break;
      }
    }
    if (!SDK_BASE_PATH) {
      SDK_BASE_PATH = './sdk/';
    }
  }
  return SDK_BASE_PATH;
}

/**
 * VVC 播放器封装类
 */
export class VVCPlayerWrapper {
  constructor(player) {
    this._player = player;
    this._eventHandlers = {};
  }

  /**
   * 播放视频
   * @param {string} url - 视频 URL (.vvc, .266, .mp4, .mpd)
   * @param {number} repeat - 重复次数，0 表示循环
   */
  play(url, repeat = 1) {
    this._player.play(url, repeat);
  }

  /**
   * 暂停播放
   */
  pause() {
    this._player.pause();
  }

  /**
   * 继续播放
   */
  resume() {
    this._player.continue();
  }

  /**
   * 停止播放
   */
  stop() {
    this._player.stop();
  }

  /**
   * 切换播放/暂停
   */
  togglePlay() {
    const status = this._player.playingStatus;
    if (status === 'stop') {
      return false; // 需要先调用 play(url)
    } else if (status === 'play') {
      this.pause();
    } else {
      this.resume();
    }
    return true;
  }

  /**
   * 全屏切换
   */
  toggleFullScreen() {
    this._player.toggleFullScreen();
  }

  /**
   * 设置音量
   * @param {number} volume - 音量 0-1
   */
  setVolume(volume) {
    this._player.setVolume(Math.max(0, Math.min(1, volume)));
  }

  /**
   * 设置静音
   * @param {boolean} muted
   */
  setMuted(muted) {
    this._player.setMuted(muted);
  }

  /**
   * 获取播放状态
   * @returns {'stop'|'play'|'pause'}
   */
  get status() {
    return this._player.playingStatus;
  }

  /**
   * 是否正在播放
   */
  get isPlaying() {
    return this._player.playingStatus === 'play';
  }

  /**
   * 是否有音频
   */
  get hasAudio() {
    return this._player.hasAudio;
  }

  /**
   * 获取视频时长(秒)
   */
  get duration() {
    return this._player.duration;
  }

  /**
   * 获取 FPS
   */
  get fps() {
    return this._player.fps;
  }

  /**
   * 获取原始播放器实例
   */
  get rawPlayer() {
    return this._player;
  }

  /**
   * 注册事件监听器
   * @param {'ready'|'statusChange'|'frame'|'metadata'|'error'|'eof'|'progress'} event
   * @param {Function} handler
   */
  on(event, handler) {
    this._eventHandlers[event] = handler;
    return this;
  }

  /**
   * 销毁播放器
   */
  destroy() {
    this.stop();
    this._eventHandlers = {};
  }
}

/**
 * 查找 WASM 应用路径
 */
async function findAppPath(basePath) {
  // 移除末尾斜杠，避免重复
  const cleanPath = (p) => p.replace(/\/+$/, '') + '/';
  
  // 优先从 SDK 目录查找
  const tryPaths = [
    cleanPath(basePath),               // sdk/
    './bin/release-static/',
    './bin/',
  ];

  for (let path of tryPaths) {
    try {
      const resp = await fetch(path + 'vvdecapp.js', { method: 'HEAD' });
      if (resp.ok) {
        console.log('Found WASM at:', path);
        return path;
      }
    } catch (e) {
      // ignore
    }
  }
  
  throw new Error('vvdecapp.js not found. Please ensure WASM files are in sdk/ directory.');
}

/**
 * 创建 VVC 播放器
 * @param {HTMLCanvasElement} canvas - Canvas 元素
 * @param {Object} options - 配置选项
 * @param {string} options.sdkPath - SDK 路径（可选，自动检测）
 * @param {number} options.threads - 解码线程数（默认 10）
 * @param {boolean} options.fixedSize - 固定视频尺寸（默认 true）
 * @returns {Promise<VVCPlayerWrapper>}
 */
export async function createVVCPlayer(canvas, options = {}) {
  // 默认 4 线程（减少内存使用）
  if (!options.threads) {
    options.threads = 4;
  }
  console.log('VVC Player: ' + options.threads + ' 线程解码模式');

  // SDK 路径 - 使用固定路径
  const sdkPath = '/sdk/';
  console.log('SDK path:', sdkPath);

  // 直接从当前目录导入 VVCPlayer
  const { default: VVCPlayer } = await import('./VVCPlayer.mjs');

  // WASM 文件在 /sdk/ 目录
  const appPath = sdkPath;
  console.log('WASM app path:', appPath);
  
  // Worker 路径
  const workerPath = sdkPath + 'decoderWorker.js';
  console.log('Worker path:', workerPath);
  
  const playerOptions = {
    workerPath: workerPath,
    libPath: sdkPath,
  };

  // 创建播放器实例
  const player = new VVCPlayer(canvas, appPath, playerOptions);

  // 应用配置
  if (options.threads) {
    player.numDecoderThreads = options.threads;
  }
  if (typeof options.fixedSize !== 'undefined') {
    player.displaySizeFixed = options.fixedSize;
  }

  // 创建包装器
  const wrapper = new VVCPlayerWrapper(player);

  // 设置事件回调
  player.onReady = (firstInit) => {
    wrapper._eventHandlers.ready?.(firstInit);
  };

  player.onStatusChange = () => {
    wrapper._eventHandlers.statusChange?.(player.playingStatus);
  };

  player.onDrawFrame = (frame) => {
    wrapper._eventHandlers.frame?.(frame);
  };

  player.onMetadata = (data) => {
    wrapper._eventHandlers.metadata?.(data);
  };

  player.onEOF = () => {
    wrapper._eventHandlers.eof?.();
  };

  player.onDownloadProgress = (percent, isChunk) => {
    wrapper._eventHandlers.progress?.(percent, isChunk);
  };

  player.onPrintMsg = (msg) => {
    wrapper._eventHandlers.log?.(msg);
  };

  player.onErrorMsg = (msg) => {
    wrapper._eventHandlers.error?.(msg);
  };

  // 等待播放器就绪
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Player initialization timeout'));
    }, 30000);

    player.onReady = (firstInit) => {
      clearTimeout(timeout);
      wrapper._eventHandlers.ready?.(firstInit);
      resolve(wrapper);
    };

    player.onErrorMsg = (msg) => {
      clearTimeout(timeout);
      wrapper._eventHandlers.error?.(msg);
      reject(new Error(msg));
    };
  });
}

// Vue 3 组合式函数
export function useVVCPlayer() {
  let playerInstance = null;

  const createPlayer = async (canvas, options = {}) => {
    playerInstance = await createVVCPlayer(canvas, options);
    return playerInstance;
  };

  const destroyPlayer = () => {
    if (playerInstance) {
      playerInstance.destroy();
      playerInstance = null;
    }
  };

  return {
    createPlayer,
    destroyPlayer,
    getPlayer: () => playerInstance,
  };
}

export default {
  createVVCPlayer,
  useVVCPlayer,
  setSDKBasePath,
  enableSharedArrayBuffer,
  VVCPlayerWrapper,
};
