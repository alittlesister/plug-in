<template>
  <div id="app">
    <transition :name="transitionName">
      <vue-page-stack>
        <router-view :key="$route.fullPath" class="router-view-c">
        </router-view>
      </vue-page-stack>
    </transition>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: "forward",
    };
  },
  watch: {
    $route(to, from) {
      if (to.params["stack-key-dir"] === "forward") {
        this.transitionName = "forward";
      } else {
        this.transitionName = "back";
      }
      // if (!to.fullPath.includes("ElectronicFence")) {

      // }
    },
  },
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f2f6fc;
  font-size: 12px;
}
.router-view-c {
  position: absolute;
  transition: opacity 0.5s, transform 0.5s;
  width: 100%;
  top: 0;
  left: 0;
}

.forward-enter,
.back-leave-active {
  opacity: 0.5;
  transform: translateX(100%);
}

.forward-leave-active,
.back-enter {
  opacity: 0.5;
  transform: translateX(-100%);
}
</style>
