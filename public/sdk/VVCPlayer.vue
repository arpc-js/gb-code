<template>
  <div class="vvc-player-container">
    <!-- 播放器画布 -->
    <div class="player-wrapper">
      <canvas ref="canvas" class="player-canvas"></canvas>
      
      <!-- 控制栏 -->
      <div class="control-bar" v-if="showControls">
        <button class="btn" @click="togglePlay" :disabled="!ready">
          <span v-if="playing">⏸</span>
          <span v-else>▶</span>
        </button>
        <button class="btn" @click="stop" :disabled="!ready">⏹</button>
        
        <!-- 音量 -->
        <div class="volume-control" v-if="hasAudio">
          <button class="btn" @click="toggleMute">
            <span v-if="muted">🔇</span>
            <span v-else>🔊</span>
          </button>
          <input type="range" min="0" max="100" v-model="volume" @input="updateVolume" />
        </div>
        
        <!-- 状态 -->
        <span class="status">{{ statusText }}</span>
      </div>
    </div>
    
    <!-- 错误提示 -->
    <div v-if="error" class="error-msg">{{ error }}</div>
  </div>
</template>

<script>
// VVC/H.266 播放器 Vue 组件
// 使用方法：
// 1. 将 sdk 目录复制到 Vue 项目的 public 目录
// 2. 在 vite.config.js 或 vue.config.js 中配置 CORS 头
// 3. 导入并使用此组件

export default {
  name: 'VVCPlayer',
  
  props: {
    // SDK 路径（相对于 public 目录）
    sdkPath: {
      type: String,
      default: '/sdk/'
    },
    // 是否显示控制栏
    showControls: {
      type: Boolean,
      default: true
    },
    // 解码线程数
    threads: {
      type: Number,
      default: 10
    },
    // 自动播放
    autoPlay: {
      type: Boolean,
      default: false
    },
    // 视频 URL
    src: {
      type: String,
      default: ''
    }
  },
  
  emits: ['ready', 'play', 'pause', 'stop', 'error', 'frame', 'ended'],
  
  data() {
    return {
      player: null,
      ready: false,
      playing: false,
      hasAudio: false,
      muted: false,
      volume: 100,
      statusText: '初始化中...',
      error: null
    };
  },
  
  watch: {
    src(newUrl) {
      if (newUrl && this.ready) {
        this.play(newUrl);
      }
    }
  },
  
  async mounted() {
    await this.initPlayer();
    
    if (this.autoPlay && this.src) {
      this.play(this.src);
    }
  },
  
  beforeUnmount() {
    this.destroy();
  },
  
  methods: {
    async initPlayer() {
      try {
        // 直接导入 SDK（不使用动态路径）
        const { createVVCPlayer } = await import('./VVCPlayerSDK.mjs');
        
        // 创建播放器
        this.player = await createVVCPlayer(this.$refs.canvas, {
          threads: this.threads,
          fixedSize: true
        });
        
        // 绑定事件
        this.player.on('statusChange', (status) => {
          this.playing = status === 'play';
          if (status === 'stop') {
            this.statusText = '已停止';
            this.$emit('stop');
          }
        });
        
        this.player.on('frame', (frame) => {
          this.statusText = `${frame.width}x${frame.height}`;
          this.$emit('frame', frame);
        });
        
        this.player.on('metadata', (data) => {
          this.hasAudio = this.player.hasAudio;
        });
        
        this.player.on('error', (msg) => {
          this.error = msg;
          this.$emit('error', msg);
        });
        
        this.player.on('eof', () => {
          this.statusText = '播放结束';
          this.playing = false;
          this.$emit('ended');
        });
        
        this.ready = true;
        this.statusText = '就绪';
        this.$emit('ready');
        
      } catch (e) {
        this.error = '初始化失败: ' + e.message;
        this.statusText = '初始化失败';
        console.error(e);
      }
    },
    
    play(url) {
      if (!this.player || !this.ready) return;
      
      const videoUrl = url || this.src;
      if (!videoUrl) {
        this.error = '请提供视频 URL';
        return;
      }
      
      this.error = null;
      this.player.play(videoUrl);
      this.playing = true;
      this.$emit('play', videoUrl);
    },
    
    pause() {
      if (!this.player) return;
      this.player.pause();
      this.playing = false;
      this.$emit('pause');
    },
    
    resume() {
      if (!this.player) return;
      this.player.resume();
      this.playing = true;
    },
    
    stop() {
      if (!this.player) return;
      this.player.stop();
      this.playing = false;
    },
    
    togglePlay() {
      if (this.playing) {
        this.pause();
      } else if (this.player?.status === 'pause') {
        this.resume();
      } else if (this.src) {
        this.play(this.src);
      }
    },
    
    toggleMute() {
      this.muted = !this.muted;
      this.player?.setMuted(this.muted);
    },
    
    updateVolume() {
      this.player?.setVolume(this.volume / 100);
    },
    
    destroy() {
      if (this.player) {
        this.player.stop();
        this.player = null;
      }
    }
  }
};
</script>

<style scoped>
.vvc-player-container {
  width: 100%;
}

.player-wrapper {
  position: relative;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

.player-canvas {
  display: block;
  width: 100%;
  max-width: 100%;
}

.control-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
}

.btn {
  background: #444;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn:hover {
  background: #666;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 5px;
}

.volume-control input {
  width: 80px;
}

.status {
  color: #fff;
  margin-left: auto;
  font-size: 14px;
}

.error-msg {
  color: #ff6b6b;
  padding: 10px;
  background: #2a1515;
  border-radius: 4px;
  margin-top: 10px;
}
</style>
