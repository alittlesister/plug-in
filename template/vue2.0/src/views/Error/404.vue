<template>
  <div class="page-404">
    <img :src="require('@/assets/404.png')"
         alt="" />
    <div class="info">页面找不到，请刷新重试</div>
    <div>
      <van-button block
                  @click="$router.push('/')"
                  plain
                  round
                  type="info">刷新
      </van-button>
    </div>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button,
  },
  data () {
    return {};
  },
  methods: {},
  computed: {},
  mounted () { },
};
</script>
<style lang="scss" scoped>
.page-404 {
  text-align: center;
  color: #c4c4c4;
  .info {
    margin-top: 22px;
    margin-bottom: 28px;
    font-size: 14px;
    font-weight: 400;
  }
  > div:last-child {
    width: 100px;
    margin: 0 auto;
  }
}
.van-button {
  border-radius: 999px;
}
</style>