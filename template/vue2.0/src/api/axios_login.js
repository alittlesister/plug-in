import service from "./config.js";
import link from "./link.js"

const wxApiUrl = link.WxRegisterApi.APIService;
const ApiUrl = link.ChildrenApi.APIService;
const wxSetting = {
  projectCode: "100001", //微信AppId
  wxRegisterToUrl: "" //用户授权后微信回调的地址
  //wxRegisterToUrl: "http://47.112.255.159:5056/#/" //用户授权后微信回调的地址
};

export const GainWxAuthorize = async () => {
  let responseData = await service({
    url: wxApiUrl + "/api/WxRegister/GainWxAuthorize",
    method: "get",
    params: {
      projectCode: wxSetting.projectCode,
      viewsName: wxSetting.wxRegisterToUrl
    }
  });
  return responseData;
};

export const automaticLogin = async (openId) => {
  let responseData = await service({
    url: ApiUrl + "/api/WxLogin/AutomaticLogin",
    method: "get",
    params: {
      openId: openId
    }
  });
  return responseData;
};