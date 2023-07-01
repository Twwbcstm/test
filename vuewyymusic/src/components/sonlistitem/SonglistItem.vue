<template>
  <div @click="toplay" class="imgspan">
    <div>
      <img :src="item.al.picUrl" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    toplay() {
      this.$router.push("/play/" + this.item.id);
    },
  },
};
</script>

<style scoped lang="scss">
div {
  div.imgspan {
    width: 20%;
    padding: 0.3vh;
    box-sizing: border-box;
    img {
      width: 100%;
      box-shadow: 0 0 1vh 0.5vh #e4cfcf;
      &:hover {
        transform-origin: center center;
        animation: fd 0.5s;
      }
    }
    span {
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      overflow: auto;
    }
  }
}

@keyframes fd {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(1.3, 1.3);
  }
}
</style>