/* 学生实时位置 Api */
import service from "../config.js";
import link from "../link.js";

let ApiUrl = link.ChildrenApi.APIService;

//根据学生Id查询该时间段的轨迹
export const getAllTrajectory = async (chiIdrenid, starttime, endtime) => {

    let responseData = await service({
        url: ApiUrl + "/api/WXHistoricalTrack/GetAllTrajectory",
        method: "get",
        params: {
            chiIdrenid: chiIdrenid,
            starttime: starttime,
            endtime: endtime
        }
    });
    return responseData;
}

//查询当前位置信息
export const getByChildrenId = async (childrenids) => {

    let responseData = await service({
        url: ApiUrl + "/api/WXHistoricalTrack/GetByChildrenId",
        method: "get",
        params: {
            childrenids: childrenids
        }
    });

    return responseData;
}