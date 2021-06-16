import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 8080,
  },
  // 生产环境路径，类似webpack的assetsPath
  base: './',
  build: {
    // 打包后目录,默认dist
    outDir: 'dist',
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
  plugins: [
    vue(),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'vant',
    //       esModule: true,
    //       resolveStyle: (name) => `vant/es/${name}/style`,
    //     },
    //   ],
    // }),
  ],
})
