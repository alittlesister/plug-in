import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./route.js";
import {
  Toast
} from "vant";
import defineMethods from "@/methods";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});
router.beforeEach(async (to, from, next) => {
  if (!to.query.error && !defineMethods.isDebug) {
    //判断是否是移动设备打开
    var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
    if (ua.match(/MicroMessenger/i) != "micromessenger") {
      //在微信中打开
      next({
        path: "/403",
        query: {
          error: 404,
          errorMsg: "打开方式错误......请在微信内打开"
        }
      });
      return;
    }
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  Toast.loading({
    duration: 0,
    message: "加载中",
    forbidClick: true,
  });
  next();
});
router.afterEach((to, from) => {
  Toast.clear();
})

const browser = {
  versions: function () {
    var u = navigator.userAgent,
      app = navigator.appVersion;
    return { //移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

export default router;