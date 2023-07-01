<template>
  <div>
    <NavView />
    <router-view />
  </div>
</template>

<script>
import NavView from "../components/NavView.vue";

export default {
  components: {
    NavView,
  },
};
</script>

<style>
</style>