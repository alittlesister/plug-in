import {
  GainWxAuthorize,
  automaticLogin
} from "@/api/axios_login.js";
import defineMethods from "@/methods";

// 绑定用户信息
const bind_wechat = async (to, from, next) => {
  if (to.query.toUrl != undefined)
    defineMethods.setCookie("toUrl", to.query.toUrl);
  if (defineMethods.isDebug) {
    let wx_user = {
      subscribe: 1,
      openid: "opoU41ty0CjY5DvVOUULW8s6UvyY",
      nickname: "陈小哥(固定值)",
      sex: "1",
      province: "湖北",
      city: "黄冈",
      country: "中国",
      headimgurl: "http://thirdwx.qlogo.cn/mmopen/trlvodCrhjichQ0L828BD0nhanwffEiaPAYTLsgZiaFmtP7GxJ86stD2jVxibUGZsAfecsHTichq4KJLNvl6ibDTwlGpIIdj5f0yUe/132",
    };
    defineMethods.setCookie("WxUserInfo", JSON.stringify(wx_user));
  }
  let user = defineMethods.getCookie("WxUserInfo");
  //是否存在缓存
  if (defineMethods.isNullOrEmpty(user)) {
    //授权成功,获取结果
    var new_url = location.href;
    if (new_url.indexOf("wxu") > -1) {
      var jsonStr = decodeURIComponent(new_url.split('=')[1]);
      var eNum = jsonStr.indexOf("}");
      user = JSON.parse(jsonStr.substr(0, eNum + 1));
      if (user.subscribe == 1)
        defineMethods.setCookie("WxUserInfo", JSON.stringify(user));
    } else {
      //前去授权
      let res = await GainWxAuthorize();
      if (res.ResultCode == 200) {
        window.location.href = res.Data;
        return;
      }
    }
  } else {
    user = JSON.parse(user);
  }
  if (defineMethods.isNullOrEmpty(user.openid)) {
    //数据获取失败,重新获取数据
    setTimeout(() => {
      next({
        path: "/404"
      });
    }, 1500);
    return;
  } else if (user.subscribe == 0) {
    //去关注
    next({
      path: "/Guardian/FollowUs",
      query: {
        openId: user.openid
      }
    });
    return;
  } else if (!defineMethods.isNullOrEmpty(user.openid)) {
    let res = await automaticLogin(user.openid);
    if (res.ResultCode == 206) {
      //去注册
      next({
        path: "/Guardian/Register",
        query: {
          openId: user.openid
        }
      });
      return;
    }
    defineMethods.setCookie("LoginUserInfo", JSON.stringify(res.Data));

    //TODO:用户一定是注册过,并且绑定了学生
    //微信模板消息连接,跳转到指定页面
    let toUrl = defineMethods.getCookie("toUrl");
    if (!defineMethods.isNullOrEmpty(toUrl)) {
      console.log(66666);
      next(toUrl);
    } else if (res.Data.IsBindStudent) {
      //已绑定学生
      next("/Guardian/Index");
    } else {
      //未绑定学生
      next("/Guardian/BindStudentInfoList");
    }
  }
  next();
}


export default bind_wechat;