<template>
  <view class="index">
    <text>{{ msg }}</text>
    <button @click="handleClick">hello</button>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.scss'

export default {
  setup () {
    const msg = ref('Hello world');
    let num = 0;
    const handleClick = ()=>{
      num.value++;
      console.log(num);
    }
    return {
      msg,
      num,
      handleClick
    }
  }
}
</script>
