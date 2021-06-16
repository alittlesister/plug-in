import Home from "../views/Home.vue"

const routes: Array<Object> = [
  {
    path: '/',
    name: 'Index',
    component: Home,
    meta:{
      showTabbar:true
    },
  },
  {
    path: '/WorkBench',
    name: 'WorkBench',
    meta:{
      showTabbar:false
    },
    component: ()=>import("../views/WorkBench.vue"),
  },
  {
    path: '/Mine',
    name: 'Mine',
    meta:{
      showTabbar:false
    },
    component: ()=>import("../views/Mine.vue"),
  },
]
export default  routes