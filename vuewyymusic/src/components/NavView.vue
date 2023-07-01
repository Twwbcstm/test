<template>
  <div class="navBox">
    <router-link to="/">首页</router-link>
    <router-link to="/bd">榜单</router-link>
    <router-link to="/mine">我的</router-link>
    <router-link to="/search">搜索</router-link>
    <router-link to="/login">登录</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.navBox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  background-color: #222;
  a {
    padding: 1.3vh 0;
    box-sizing: border-box;
    flex: 1;
    border-bottom: 0.3vh solid transparent;
    text-align: center;
    font-size: 1.7vh;
    color: rgb(255, 253, 253);
  }
  .isActive {
    color: red;
    border-bottom-color: red;
  }
}
</style>