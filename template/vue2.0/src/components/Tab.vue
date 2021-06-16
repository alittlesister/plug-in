<template>
  <div class="tab">
    <van-cell-group title="校车管理">
      <van-cell>
        <div class="tab-list">
          <div class="tab-list-item" v-for="i in 3" :key="i">
            <van-image
              width="1.5rem"
              height="1.5rem"
              lazy-load
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <span>校车轨迹实时查看</span>
          </div>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
  import { Cell, CellGroup, Image as VanImage } from "vant";
  export default {
    name: "Menu",
    data() {
      return {};
    },
    methods: {
      swiperleft() {
        console.log("左滑");
      },
    },
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [VanImage.name]: VanImage,
    },
  };
</script>
<style lang="scss">
  .tab-list {
    display: flex;
    flex-flow: row wrap;
    &-item:nth-child(3n) {
      margin-right: 0;
    }
    @for $i from 1 through 3 {
      &-item:nth-child(#{$i}) {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        margin-bottom: 10px;
        background: rgba(random(225), random(255), random(255), 0.6);
        span {
          display: inline-block;
          width: 65px;
          text-align: center;
        }
      }
    }
  }
</style>
