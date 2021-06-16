/* 电子围栏 Api */
import service from "../config.js";
import link from "../link.js";

//url ip 地址
var Apiurl = link.ChildrenApi.APIService;

//根据家长Id查询电子围栏
export const getByUserIdFence = async (UserId) => {

    let responseData = await service({
        url: Apiurl + '/api/WXElectronicFence/GetByUserIdFence',
        method: 'get',
        params: {
            UserId: UserId
        }
    });

    return responseData;
}

//根据围栏Id查询围栏信息
export const getBydRenfence = async (id) => {

    let responseData = await service({
        url: Apiurl + '/api/WXElectronicFence/GetBydRenfence',
        method: 'get',
        params: {
            id: id
        }
    });

    return responseData;
}

//根据家长Id查询家长绑定的学生
export const getByUserIdChildren = async (userid) => {

    let responseData = await service({
        url: Apiurl + '/api/WXElectronicFence/GetByUserIdChildren',
        method: 'get',
        params: {
            userid: userid
        }
    });

    return responseData;
}

//添加或修改电子围栏信息
export const insertOrUpdateRenfence = async (fenceModel) => {
    let responseData = await service({
        url: Apiurl + '/api/WXElectronicFence/InsertOrUpdateRenfence',
        method: 'post',
        data: fenceModel
    });

    return responseData;
}

//删除电子围栏
export const deleteRenfence = async (id) => {

    let responseData = await service({
        url: Apiurl + '/api/WXElectronicFence/DleteRenfence',
        method: 'get',
        params: {
            id: id
        }
    });
    return responseData;
}

