<template>
  <div class="page-403">
    <img :src="require('@/assets/403.png')"
         alt="" />
    <div class="info">{{errorMsg}}</div>
    <div>
      <van-button v-if="isShwo"
                  to="/"
                  plain
                  round
                  type="info">返回首页</van-button>
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
    return {
      isShwo: true,
      errorMsg: "啊哦！你的请求暂时不支持呀…"
    };
  },
  methods: {},
  computed: {},
  mounted () {
    var msg = this.$route.query.errorMsg;
    if (!this.defineMethods.isNullOrEmpty(msg)) {
      this.errorMsg = msg;
      this.isShwo = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.page-403 {
  text-align: center;
  color: #c4c4c4;
  .info {
    margin-top: 22px;
    margin-bottom: 28px;
    font-size: 14px;
    font-weight: 400;
  }
}
.van-button {
  border-radius: 999px;
}
</style>