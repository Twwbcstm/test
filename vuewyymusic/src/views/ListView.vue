<template>
  <div>
    <head-view :title="titles[this.$route.params.type]+'列表'"/>
    <div class="list">
      <ListItemView v-for="item in list" :key="item.id" :list="item"/>
    </div>
  </div>
</template>

<script>
import { getArtists, getNewsong, getPersonalized } from '../api';
import ListItemView from '../components/list/ListItemView.vue';
import HeadView from '../components/HeadView.vue'
export default {
  data(){
    return {
      list:[],
      titles:{
        1:'热门歌手',
        2:'推荐歌单',
        3:'推荐音乐'
      }
    }
  },
  components:{
    ListItemView,
    HeadView
  },
  mounted(){
    // console.log(this.$route.params.type);
    switch(this.$route.params.type){
      case '1':
        getArtists({limit:30,offset:7}).then(data=>{
          this.list = data.data.artists;
          // this.titles = '热门歌手';
        })
        break;
      case '2':
        getPersonalized({limit:30}).then(data=>{
          this.list = data.data.result;
          // this.titles = '推荐歌单';
        })
        break;
      case '3':
        getNewsong({limit:30}).then(data=>{
          this.list = data.data.result;
          // this.titles = '推荐音乐';
        })
        break;
      default:
        break;
    }
  }
};
</script>

<style scoped lang="scss">
.list{
  padding-top: 6vh;
}
</style>