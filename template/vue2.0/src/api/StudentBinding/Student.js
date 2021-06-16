import service from "../config.js";
import link from "../link.js";

const ApiUrl = link.ChildrenApi.APIService;

//根据家长Id查询已绑定学生列表
export const getChildrenList = async (userid) => {
  let responseData = await service({
    url: ApiUrl + "/api/WXStudentBinding/GetChildrenList",
    method: "get",
    params: {
      userid: userid
    }
  });

  return responseData;
};


//根据学生Id查询学生绑定信息
export const getByChildrenId = async (childrenid, userid) => {

  let responseData = await service({
    url: ApiUrl + "/api/WXStudentBinding/GetByChildrenId",
    method: "get",
    params: {
      childrenid: childrenid,
      userid: userid
    }
  });

  return responseData;
}

//删除学生绑定
export const deleteChildren = async (childrenid) => {

  let responseData = await service({
    url: ApiUrl + "/api/WXStudentBinding/DeleteChildren",
    method: "get",
    params: {
      childrenid: childrenid
    }
  });

  return responseData;
}

//修改绑定学生信息
export const updateChildren = async (updatechildren) => {

  let responseData = await service({
    url: ApiUrl + "/api/WXStudentBinding/UpdateChildren",
    method: "post",
    data: updatechildren
  });

  return responseData;
}

//根据设备编号查询设备详情信息(查询设备是否存 并且查看此设备是否被其他的学生绑定过)
export const getByDeviceIdExistence = async (DeviceId, id) => {

  let responseData = await service({
    url: ApiUrl + "/api/WXStudentBinding/GetByDeviceIdExistence",
    method: "get",
    params: {
      DeviceId: DeviceId
    }
  });

  return responseData;
}

//添加学生绑定
export const insertChildren = async (childrenmodel) => {

  let responseData = await service({
    url: ApiUrl + "/api/WXStudentBinding/InsertChildren",
    method: "post",
    data: childrenmodel
  });

  return responseData;
}


//添加学生紧急联系人
export const UpdateUrgentPeople = async (deviceid, UrgentPeople) => {

  let responseData = await service({
    url: ApiUrl + "/api/Equipment/UpdateEquipmentParameters",
    method: "get",
    params: {
      deviceid: deviceid,
      UrgentPeople: UrgentPeople
    }
  });

  return responseData;
}

