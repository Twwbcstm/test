<template>
  <div class="home">
    <!-- <myTabs>
      <myTab>123</myTab>
      <myTab>456</myTab>
    </myTabs> -->
    <div class="home-banner">
      <BannerView :banners="banners" />
    </div>
    <SongView title="热门歌手" :data="artists" :type="1"/>
    <SongView title="推荐歌单" :data="newsong" :type="2"/>
    <SongView title="推荐新音乐" :data="newmusic" :type ="3"/>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { getArtists, getBanner, getNewsong, getPersonalized } from "../api/index";
// import install from '../components/mytabs/index';
// import Vue from "vue";
// import App from "@/App.vue";
// App.use(install)
// import {createApp} from 'vue'
// const app = createApp({});
// Vue.use(install)

export default {
  name: "HomeView",
  data() {
    return {
      banners: [],
      artists: [],
      newsong: [],
      newmusic: []
    };
  },
  components: {
    SongView: defineAsyncComponent(() =>
      import("@/components/home/SongView.vue")
    ),
    BannerView: defineAsyncComponent(() =>
      import("@/components/banners/BannerView.vue")
    ),
  },
  methods: {
  },
  mounted() {
    /**
     * 首页轮播图
     */
    getBanner({ type: 0 }).then((data) => {
      // console.log(data);
      this.banners = Object.freeze(data.data.banners);
    });
    /**
     * 热门歌手
     */
    getArtists({ limit: 12, offset: 0 }).then((data) => {
      // console.log(data);
      this.artists = Object.freeze(data.data.artists);
      
    });

    /**
     * 推荐新歌
     */

    getPersonalized({limit:12}).then(data=>{
      // console.log(data);
      this.newsong = Object.freeze(data.data.result);
    })

    /**
     * 推荐新音乐
     */

     getNewsong({limit:12}).then(data=>{
        // console.log(data);
      this.newmusic = Object.freeze(data.data.result);
     })

  },
};
</script>
<style scoped lang="scss">
.home{
  padding-top: 4.4vh;
}
</style>