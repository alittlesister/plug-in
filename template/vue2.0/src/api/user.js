import service from "./config.js";
import link from "./link.js"

const ApiUrl = link.UserApi.APIService;

//注册
export const register = async (data) => {
    let responseData = await service({
        url: ApiUrl + "api/XUser/Register",
        method: "post",
        data: data,
    });
    return responseData;
}
//获取年级班级关系
export const getAll = async () => {
    let responseData = await service({
        url: ApiUrl + `api/GradeClass/GetAll`,
        method: "get",
        params: {
            gardenId: 0
        }
    });
    return responseData;
}

//获取园区列表
export const getGardenPageList = async (PageIndex, PageSize, gardenName) => {
    let responseData = await service({
        url: ApiUrl + `api/AdministrationMap/GetGardenPageList`,
        method: "get",
        params: {
            PageIndex: PageIndex,
            PageSize: PageSize,
            gardenName: gardenName
        }
    });
    return responseData;
}

//检查设备编号是否注册过
// export const checkDeviceSN = async (deviceSN) => {
//     let responseData = await service({
//         url: ApiUrl + `api/XUser/CheckDeviceSN`,
//         method: "get",
//         params: {
//             deviceSN: deviceSN
//         }
//     });
//     return responseData;
// }