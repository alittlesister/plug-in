const path = require("path");
// const TerserJSPlugin = require('terser-webpack-plugin')
// const CompressionWebpackPlugin = require("compression-webpack-plugin");

// isDevelop不是生产环境
const isDevelop = process.env.NODE_ENV !== "production";
module.exports = {
  // publicPath: isDevelop ? "/" : "./",
  outputDir: "../production-enviroment",
  transpileDependencies: ["node_modules/*"],
  // assetsDir: "assets",
  // // eslint-loader 保存的时候进行检查
  lintOnSave: true,
  // // webpack配置
  // chainWebpack: () => {
  //   if (isDevelop) {
  //     //开发环境配置
  //   } else {
  //     //生产环境配置
  //   }
  // },
  configureWebpack: (config) => {
    // if (!isDevelop) {
    //   config.plugins.push(new TerserJSPlugin());
    // }
    config.resolve = {
      extensions: [".js", ".json", ".vue", ".scss", ".png", ".jpg"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    };
  },
  // productionSourceMap: false,
  // css: {
  //   extract: true,
  //   sourceMap: false,
  //   // css预设器配置项
  // loaderOptions: {
  //   less:{
  //     lessOptions:{
  //       modifyVars: {

  //       }
  //     }
  //   }
  // },
  //   requireModuleExtension: false
  // },
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8084,
    // https: false,
    hot: true,
    // hotOnly: false,
    proxy: null,
    overlay: {
      // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true,
    },
  },
  /**
   * 第三方插件配置
   */
  pluginOptions: {},
};
