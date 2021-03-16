<template>
  <view class="index">
    <view class="index">
      <AtNoticebar marquee>
        欢迎使用 Taro UI Vue
      </AtNoticebar>
      <AtButton type="primary" :on-click="handleClick">
        AtButton
      </AtButton>
      <AtToast :is-opened="show" :text="msg" :on-close="handleClose" />
    </view>
  </view>
</template>

<script lang="ts">
// 按需引入, 更小的应用体积
import { Component, Vue, Model, Watch } from 'vue-property-decorator';
import { AtButton, AtToast, AtNoticebar } from 'taro-ui-vue';
import './index.scss';
@Component({
  components: {
    AtButton,
    AtToast,
    AtNoticebar,
  },
})
export default class Index extends Vue {
  show = false;
  data() {
    return {
      msg: 'Hello world!',
      show: false,
    };
  }

  handleClick() {
    this.show = true;
  }
  handleClose() {
    this.show = false;
  }
}
</script>
