<template>
  <div>
    歌词：
    <p>时间：{{ curTime }}</p>
   <div>
    <p v-for="(item,index) in song_lrc" :key="index">{{ item }}</p>
   </div>
   <div>
      <div class="times_lrc" v-if="Object.keys(tObj).length>0">
        <p :class="{'isActive':curTime>tArr[index] && curTime<tArr[index+1]}" v-for="(item,key,index) in tObj" :key="key">{{ item }}</p>
      </div>
   </div>
  </div>
</template>



<script >
import { getLyric } from "@/api/index";
export default  {
  name:'LrcView',
  props: {
    curTime: {
      type: [String, Number],
      requried: true,
      default: 0,
    },
    
  },
 
  data() {
    return {
      song_lrc: "",
      tObj: {},
      tArr: [],
    };
  },
  methods: {
    todolrc(gc) {
      if (gc.indexOf("[00:") === -1) {
        // 没有时间的歌词 以“\n”为分隔符
        this.song_lrc = gc.split("\n");
        // console.log(gc);
      } else {
        // 有时间的歌词
        let gcArr = gc.split("\n");
        let time, t, min, sec,ms, hollTime;
        let reg = /\[\d*:\d*(\.|:)\d*\]/g;
        for (let i = 0; i < gcArr.length; i++) {
          time = gcArr[i].match(reg);
          if (!time) continue;
          t = time[0];
          min = t.match(/\[\d*/)[0].slice(1);
          sec = t.match(/:\d*/)[0].slice(1);
          ms = t.match(/(\.|:)\d*/)[0].slice(1);
          hollTime = min*60 + sec*1 +('.' + ms)*1;
          this.tArr.push(hollTime);
          this.tObj[hollTime] = gcArr[i].replace(t, "");
          // console.log(hollTime);
        }
        // console.log(this.tObj, this.tArr);
      }
    },
  },
  mounted() {
    getLyric({ id: this.$route.params.id }).then((data) => {
      // console.log(data);
      this.todolrc(data.data.lrc.lyric);
      
    });
    /**
     * 分两种情况，第一种有时间的，第二种没有时间的
     */
  },
 
};
</script>

<style scoped lang="scss">
.isActive{
  color: red;
}
</style>