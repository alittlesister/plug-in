<template>
  <div class="index w-full h-screen  overflow-x-hidden">
    <div class="bg-gray-200 w-full pt-1 overflow-y-scroll" :style="{height:$router.currentRoute.value.meta.showTabbar?'calc(100% - 50px)':'100%'}">
      <router-view></router-view>
    </div>
    <div v-if="$router.currentRoute.value.meta.showTabbar">
      <van-tabbar  v-model="active">
      <van-tabbar-item
        :to="items.link"
        v-for="(items, index) in list"
        :key="index"
        icon-prefix="iconfont"
        :icon="active == index ? items.activeIcon : items.icon"
        >{{ items.text }}</van-tabbar-item
      >
    </van-tabbar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref,onUpdated,getCurrentInstance } from "vue"
let {proxy}:any = getCurrentInstance();
let active = ref(0)
let list = ref([
  {
    icon: " icon-shouye_home01",
    activeIcon: " icon-shouye_home02",
    text: "首页",
    link: "/",
  },
  {
    icon: " icon-shouye_control01",
    activeIcon: " icon-shouye_control02",
    text: "工作台",
    link: "/WorkBench",
  },
  {
    icon: " icon-shouye_my01",
    activeIcon: " icon-shouye_my02",
    text: "我的",
    link: "/Mine",
  },
])


onUpdated(()=>{
  !(proxy.$router.currentRoute.value.meta.showTabbar)?active.value = 0:'';
})
</script>
<style lang="less">
  .index{
    .van-badge__wrapper{
      font-size: 24px;
    }
  }
</style>
