<template>
  <div>
    <p>404，您访问的页面飞走了...</p>
    <button @click="tohome">返回首页</button>
    <p>{{ time }}秒后返回首页</p>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      time: 5,
      timer: null,
    };
  },
  mounted() {
    // console.log(this);
    this.timer = setInterval(() => {
      if (this.time === 0) {
        this.$router.push("/");
      }
      this.time--;
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    tohome() {
      this.$router.push("/");
    },
  },
};
</script>
  
  <style>
</style>