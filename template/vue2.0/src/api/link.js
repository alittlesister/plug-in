let ApiService = {
  "SystemUserApi": {
    "ApiName": "用户相关服务PAI-->Z.UserService-->王阳", //API名称
    "Sandbox": "http://localhost:42876/", //测试环境
    "Running": "http://47.112.255.159:8003/", //正式环境
    "RuntimeType": "Running", //当前运行的环境   类型1：Sandbox:测试环境,类型2：Running正式环境
    "APIService": "" //API输出地址
  },
  "UploadApplicationApI": {
    "ApiName": "文件上传服务PAI-->UploadApplication-->王阳", //API名称
    "Sandbox": "http://47.112.255.159:8002/", //测试环境
    "Running": "http://47.112.255.159:8002/", //正式环境
    "RuntimeType": "Running", //当前运行的环境   类型1：Sandbox:测试环境,类型2：Running正式环境
    "APIService": "" //API输出地址
  },
  "UserApi": {
    "ApiName": "用户注册-->User-->肖志龙", //API名称
    "Sandbox": "http://localhost:51956/", //测试环境
    "Running": "http://47.112.255.159:8989/", //正式环境
    "RuntimeType": "Running", //当前运行的环境   类型1：Sandbox:测试环境,类型2：Running正式环境
    "APIService": "" //API输出地址
  },
  "WxRegisterApi": {
    "ApiName": "登陆,授权-->User-->陈浩", //API名称
    "Sandbox": "http://localhost:36371", //测试环境
    "Running": "http://wxsystem.huaxinhe.com.cn", //正式环境
    "RuntimeType": "Running", //当前运行的环境   类型1：Sandbox:测试环境,类型2：Running正式环境
    "APIService": "" //API输出地址
  },
  "ChildrenApi": {
    "ApiName": "低幼儿童管理 -->单波", //API名称
    "Sandbox": "http://localhost:51956", //测试环境
    "Running": "http://47.112.255.159:8989", //正式环境
    "RuntimeType": "Running", //当前运行的环境   类型1：Sandbox:测试环境,类型2：Running正式环境
    "APIService": "" //API输出地址
  },
  "testMock": {
    url: 'https://www.fastmock.site/mock/6cf6b3e8e35c68e4efc426938056d1af/miniprogram'
  }
}
for (const key in ApiService) {
  //默认为正式环境
  ApiService[key].APIService = ApiService[key].Running;
  //如果配置Sandbox
  if (ApiService[key].RuntimeType === "Sandbox") {
    ApiService[key].APIService = ApiService[key].Sandbox;
  }
}

export default ApiService;