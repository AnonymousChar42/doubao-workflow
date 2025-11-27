import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn } from 'vite-plugin-monkey';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'; // 引入 path 模块

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 配置 @ 指向 src 目录
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://www.google.com/s2/favicons?sz=64&domain=doubao.com',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://www.doubao.com/chat/*'],
        name: '豆包工作流',
        description: '这是一个用于批量生成和下载图像的工作流对话框组件，用于自动化执行任务。',
        updateURL: 'https://anonymouschar42.github.io/doubao-workflow/doubao-workflow.user.js',
        downloadURL: 'https://anonymouschar42.github.io/doubao-workflow/doubao-workflow.user.js',
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
});
