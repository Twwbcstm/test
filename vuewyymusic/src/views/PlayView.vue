<template>
  <div>
    <HeadView :title="'播放页面'" />
    <div>
      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.0d18d357867b8ed73fe6b1bea926df8f?rik=r0fgEOilXwcEBA&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f0148ea59148dbeb5b3086ed419dfb7.jpg%401280w_1l_2o_100sh.jpg&ehk=W9aWdlVJryX0lmfI5JdF6aPou7d%2fWy3zSblxq66R3wY%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
    </div>
    <div>
      <audio ref="myaudio" :src="music.url" controls></audio>
    </div>
    <div>
      <LrcView :curTime="curTime"/>
    </div>
  </div>
</template>

<script>
import {getSongurl } from "@/api/index";
import HeadView from "@/components/HeadView.vue";
import LrcView from "@/components/lrc/LrcView.vue";
export default {
  name:'PlayView',
  data() {
    return {
      music: {},
      lyric: "",
      curTime:0,
      adE:Function,
      reE:Function,
    };
  },
  components: {
    HeadView,
    LrcView
  },
  mounted() {
    getSongurl({ id: this.$route.params.id }).then((data) => {
      // console.log(data);
      this.music = data.data.data[0];
      this.addEvent();
    });
   
  },
  methods: {
    addEvent(){
      this.$refs.myaudio.addEventListener('timeupdate',this.getTime)
    },
    removeEvent(){
      this.$refs.myaudio.removeEventListener('timeupdate',this.getTime,true);
    },
    getTime(){
      this.curTime = this.$refs.myaudio.currentTime
    }
  },
  onBeforeUnmount(){
    this.removeEvent();
  },
  
};
</script>

<style>
</style>