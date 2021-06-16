/* 进出电子围栏记录 Api */
import service from "../config.js";
import link from "../link.js";

let ApiUrl = link.ChildrenApi.APIService;


//根据家长Id查询学生进出电子围栏记录 
export const getChildrenOutcampusrecords = async (userid, IsSchool, Time, ChildrenId) => {

    let responseData = await service({
        url: ApiUrl + "/api/WXOutElectronicfence/GetChildrenOutcampusrecords",
        method: "get",
        params: {
            userid: userid,
            IsSchool: IsSchool,
            Time: Time,
            ChildrenId: ChildrenId
        }
    });
    return responseData;
}

//根据家长Id查询家长绑定的学生
export const getByUserIdChildren = async (userid) => {

    let responseData = await service({
        url: ApiUrl + "/api/WXElectronicFence/GetByUserIdChildren",
        method: "get",
        params: {
            userid: userid
        }
    });
    return responseData;
}


