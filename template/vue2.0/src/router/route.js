import wxBinding from "./wxBinding.js";

const routes = [{
    path: "/",
    name: 'Index',
    // redirect: '/Guardian/Index',
    beforeEnter: wxBinding
  },
  {
    path: "/BindWechat",
    name: "BindWechat",
    meta: {
      title: "绑定微信",
    },
    component: () => import("@/views/BindWechat.vue"),
  },
  {
    path: "/Guardian",
    name: 'Guardian',
    redirect: '/Guardian/Index',
    component: () => import("@/views/Guardian/Index.vue"),
    children: [{
        path: "/Guardian/Index",
        name: "GuardianIndex",
        meta: {
          title: "家长首页",
          showIcon: false
        },
        component: () => import("@/views/Guardian/HomeMenu.vue"),
      },
      {
        path: "/Guardian/Register",
        name: "Register",
        meta: {
          title: "注册",
          showIcon: false
        },
        component: () => import("@/views/Guardian/Register.vue"),
      },
      {
        path: '/Guardian/BindStudentAdd',
        name: 'BindStudentAdd',
        meta: {
          title: "添加学生绑定",
        },
        component: () => import("@/views/Guardian/BindStudentAdd.vue")
      },
      {
        path: "/Guardian/BindStudentInfoList",
        name: "BindStudentInfoList",
        meta: {
          title: "绑定学生信息",
          showIcon: true
        },
        component: () => import("@/views/Guardian/BindStudentInfoList.vue")
      },
      {
        path: "/Guardian/BindStudentInfo",
        name: "BindStudentInfo",
        meta: {
          title: "绑定学生信息",
          showIcon: false
        },
        component: () => import("@/views/Guardian/BindStudentInfo.vue"),
      },
      {
        path: "/Guardian/EmegencyContactList",
        name: "EmegencyContactList",
        meta: {
          title: "紧急联系人",
          showIcon: true
        },
        component: () => import("@/views/Guardian/EmegencyContact/EmegencyContactList.vue")
      },
      {
        path: "/Guardian/ChooseSchool",
        name: "ChooseSchool",
        meta: {
          title: "选择学校",
          showIcon: false
        },
        component: () => import("@/views/Guardian/ChooseSchool.vue"),
      },
      {
        path: "/Guardian/StudentRealPosition",
        name: "StudentRealPosition",
        meta: {
          title: "学生实时位置"
        },
        component: () => import("@/views/Guardian/StudentRealPosition.vue"),
      },
      {
        path: "/Guardian/InOrOutRecords",
        name: "InOrOutRecords",
        meta: {
          title: "进出校记录",
        },
        component: () => import("@/views/Guardian/InOrOutRecords.vue"),
      },
      {
        path: "/Guardian/ElectronicFence",
        name: "ElectronicFence",
        meta: {
          title: "电子围栏地图",
        },
        component: () => import("@/views/Guardian/ElectronicFence.vue"),
      },
      {
        path: "/Guardian/ElectronicFence",
        name: "ElectronicFenceList",
        meta: {
          title: "电子围栏列表",
        },
        component: () => import("@/views/Guardian/ElectronicFence/ElectronicFenceList.vue"),
      },
      {
        path: "/Guardian/AddElectronicFence",
        name: "AddElectronicFence",
        meta: {
          title: "新增电子围栏",
          showIcon: false
        },
        component: () => import("@/views/Guardian/ElectronicFence/AddElectronicFence.vue"),
      },
      {
        path: "/Guardian/SchoolAppointment",
        name: "SchoolAppointment",
        meta: {
          title: "学校预约",
        },
        component: () => import("@/views/Guardian/SchoolAppointment/SchoolAppointment.vue"),
      },
      {
        path: "/Guardian/AddSchoolAppointment",
        name: "AddSchoolAppointment",
        meta: {
          title: "新增预约",
        },
        component: () => import("@/views/Guardian/SchoolAppointment/AddSchoolAppointment.vue"),
      },
      {
        path: "/Guardian/RealTimeAlarm",
        name: "RealTimeAlarm",
        meta: {
          title: "报警信息",
        },
        component: () => import("@/views/Guardian/RealTimeAlarm.vue"),
      },
      {
        path: "/Guardian/SchoolMap",
        name: "SchoolMap",
        meta: {
          title: "学校地图",
        },
        component: () => import("@/views/Guardian/SchoolMap.vue"),
      },
      {
        path: "/Guardian/UpOrDownRecords",
        name: "UpOrDownRecords",
        meta: {
          title: "上下车记录",
        },
        component: () => import("@/views/Guardian/UpOrDownRecords.vue"),
      },
      {
        path: "/Guardian/SchoolBusTrailCheck",
        name: "SchoolBusTrailCheck",
        meta: {
          title: "校车轨迹实时查看",
        },
        component: () => import("@/views/Guardian/SchoolBusTrailCheck.vue"),
      },
      {
        path: "/Guardian/SchoolBusHistoryCheck",
        name: "SchoolBusHistoryCheck",
        meta: {
          title: "校车轨迹历史查看",
        },
        component: () => import("@/views/Guardian/SchoolBusHistoryCheck.vue"),
      },
      {
        path: "/Guardian/Map",
        name: "Map",
        meta: {
          title: "地图示例",
        },
        component: () => import("@/views/Map.vue"),
      },
      {
        path: "/Guardian/FollowUs",
        name: "FollowUs",
        meta: {
          title: "关注我们",
          showIcon: false
        },
        component: () => import("@/views/Guardian/FollowUs.vue"),
      }
    ]
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "404",
    },
    component: () => import( /* webpackChunkName: "about" */ "../views/Error/404.vue"),
  },
  {
    path: "/403",
    name: "403",
    meta: {
      title: "403",
    },
    component: () => import( /* webpackChunkName: "about" */ "../views/Error/403.vue"),
  },
  {
    path: "/503",
    name: "503",
    meta: {
      title: "503",
    },
    component: () => import( /* webpackChunkName: "about" */ "../views/Error/503.vue"),
    beforeEnter: (to, from, next) => {
      if (!to.query.toUrl) {
        next({
          path: "/503",
          query: {
            toUrl: from.path
          }
        });
        return;
      }
      next();
    }
    //
  },
]

export default routes;