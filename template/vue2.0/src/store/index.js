import Vue from "vue";
import Vuex from "vuex";
// 引入自定义方法
import defineMethods from "@/methods";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: undefined,
    homeControls: true,
    // 家长注册
    userRegisterInfo: {
      Name: "",
      Phone: null,
      IdCard: null,
      OpenId: null,
    },
    childrens: [
      // {
      //   GardenId:14,
      //   GardenName:"碧海小学",
      //   StudentNo:111000,
      //   Name:"xiaozhilong",
      //   GradeId:1,
      //   ClassId:1,
      //   IdCard:350402199302101196,
      //   DeviceSN:"ba45e3e6-fd41-46d8-a83b-689244a62819",
      //   Relation:"监护人",
      // }
    ],
    gardenInfo: null,
  },
  mutations: {
    updateToken(state, token) {
      state.token = token;
    },
    updatePersonalInfo(state, personalInfo) {
      state.personalInfo = personalInfo;
    },
    updateStudent(state, student) {
      state.student = student;
    },
    updateChildren(state, childrens) {
      state.childrens = childrens;
    },
    addChildren(state, children) {
      state.childrens.push(children);
    },
    addGardenInfo(state, gardenInfo) {
      state.gardenInfo = gardenInfo;
    }
  },
  actions: {
    requestToken({ commit, state }, token) {
      commit("updateToken", token);
    },
    requestPersonalInfo({ commit, state }, personalInfo) {
      commit("updatePersonalInfo", personalInfo);
    },
    requestStudent({ commit, state }, student) {
      commit("updateStudent", student);
    },
    requestChildren({ commit, state }, children) {
      commit("addChildren", children);
    },
    requestUpdateChildren({ commit, state }, childrens) {
      commit("updateChildren", childrens);
    },
    requestGardenInfo({ commit, state }, gardenInfo) {
      commit("addGardenInfo", gardenInfo);
    }
  },
  modules: {},
});
