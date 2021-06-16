<template>
  <van-row class="mt-16">
    <van-col span="22" :offset="1">
      <div
        class="h-172 rounded-normal"
        style="background: linear-gradient(138deg, #409eff 0%, #204f80 100%)"
      ></div>
    </van-col>
  </van-row>

  <van-row class="mt-16">
    <van-col span="10" :offset="1">
      <div
        class="h-64 rounded-sm"
        style="
          background: linear-gradient(
            137deg,
            #5996fb 0%,
            #5096fd 19%,
            #4997fe 47%,
            #439aff 74%,
            #409eff 100%
          );
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        "
      ></div>
    </van-col>
    <van-col span="10" :offset="2">
      <div
        class="h-64 rounded-sm"
        style="
          background: linear-gradient(
            137deg,
            #5996fb 0%,
            #5096fd 19%,
            #4997fe 47%,
            #439aff 74%,
            #409eff 100%
          );
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        "
      ></div>
    </van-col>
  </van-row>
  <van-row class="mt-20">
    <van-col :offset="1">消息列表</van-col>
  </van-row>

  <van-row class="mt-16 mb-16" v-for="i in 5" :key="i">
    <van-col :span="22" :offset="1">
      <div class="bg-white rounded-normal h-164"></div>
    </van-col>
  </van-row>
</template>
<script lang="ts">
  import { ref } from 'vue'
</script>
