export interface VvcPlayerProps {
  /** 视频 URL */
  src?: string;
  /** 播放器宽度 */
  width?: string | number;
  /** 播放器高度（设置后忽略 aspectRatio） */
  height?: string | number;
  /** 宽高比（默认 16/9） */
  aspectRatio?: string;
  /** SDK 静态资源路径（默认 /sdk/） */
  sdkPath?: string;
  /** 是否显示控制栏 */
  showControls?: boolean;
  /** 解码线程数（默认 2） */
  threads?: number;
  /** 是否自动播放 */
  autoPlay?: boolean;
  /** 是否循环播放 */
  loop?: boolean;
  /** 海报图片 URL */
  poster?: string;
}

export interface VvcPlayerInstance {
  /** 播放视频 */
  play: (url?: string) => void;
  /** 暂停 */
  pause: () => void;
  /** 继续播放 */
  resume: () => void;
  /** 停止 */
  stop: () => void;
  /** 切换全屏 */
  toggleFullScreen: () => void;
  /** 设置音量 (0-1) */
  setVolume: (volume: number) => void;
  /** 设置静音 */
  setMuted: (muted: boolean) => void;
  /** 播放器是否就绪 */
  ready: boolean;
  /** 是否正在播放 */
  playing: boolean;
}

export interface FrameInfo {
  width: number;
  height: number;
  cts?: number;
}

export interface MetadataInfo {
  duration?: number;
  numFrames?: number;
  fps?: number;
  width?: number;
  height?: number;
  hasAudio?: boolean;
}
