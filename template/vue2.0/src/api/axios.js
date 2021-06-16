import service from "./config.js";
import link from "./link.js"

const ApiUrl = link.SystemUserApi.APIService;

export const getToken = async (data) => {
  let responseData = await service({
    url: ApiUrl + "/token",
    method: "post",
  });
  return responseData;
};

// 前端测试数据
export const getList = async (data) => {
  let responseData = await service({
    url: link.testMock.url + "/list",
    method: "get",
  });
  return responseData;
};