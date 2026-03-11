import type { App, Plugin } from 'vue';
import VvcPlayer from './VvcPlayer.vue';

// 导出组件
export { VvcPlayer };

// 导出类型
export type { VvcPlayerProps, VvcPlayerInstance } from './types';

// Vue 插件安装
const plugin: Plugin = {
  install(app: App) {
    app.component('VvcPlayer', VvcPlayer);
  },
};

export default plugin;
