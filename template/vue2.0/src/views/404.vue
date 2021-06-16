<template>
  <div class="error">
    <h1>{{ errorMsg }}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      errorMsg: "404页面",
    };
  },
  methods: {
    setMsg () {
      var msg = this.$route.query.errorMsg;
      if (!this.defineMethods.isNullOrEmpty(msg)) {
        this.errorMsg = msg;
      }
    },
  },
  mounted () {
    this.setMsg();
  },
};
</script>
<style></style>
