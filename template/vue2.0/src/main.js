import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 触摸事件
import VueTouch from "vue-touch";
// vant引入
import "vant/lib/index.css";
import "./plugins/vant.js";
// 路由状态和换场动画
import VuePageStack from "vue-page-stack";
// 请求接口封装
import "@/api/config.js";
// 初始化样式
import "./style/init.css";
import "./style/global.scss";
// 滚动插件
import "./plugins/scroll.js";
// rem的h5适配
import "amfe-flexible/index.js";
// 引入自定义方法
import defineMethods from "./methods";
// 引入dayjs时间插件
import "./plugins/dayjs.js";
// 引入iconfont
import "@/style/iconfont/iconfont.css";
import "@/style/iconfont/icon.css";
// 引入vconsole进行测试
// import Vconsole from "vconsole"


Vue.config.productionTip = false;
Vue.prototype.defineMethods = defineMethods;
// Vue.prototype.$vConsole = new Vconsole();
Vue.prototype.isPC = defineMethods.IsPC();
Vue.use(VuePageStack, {
  router
});
Vue.use(VueTouch, {
  name: "v-touch"
});

new Vue(
  {
    router,
    store,
    render: (h) => h(App)
  },

).$mount("#app");
