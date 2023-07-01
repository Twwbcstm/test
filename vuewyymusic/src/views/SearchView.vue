<template>
  <div>
    <HeadView>
      <InputSearch @getInputValue="getValue"/>
    </HeadView>
    <div class="search-boxs">
      <div class="boxs" v-for="item in list" :key="item.id" @click="toplay(item.id)">
        <div class="left">
          <img :src="item.al.picUrl" alt="">
        </div>
        <div class="right">
          <span>{{ item.name }}</span><span>{{ item.al.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadView from '@/components/HeadView.vue';
import InputSearch from '../components/inputsearch/InputSearch.vue';
import { songSearch } from '../api';
export default {
  data(){
    return {
      list:[]
    }
  },
  components:{
    HeadView,
    InputSearch
 
  },
  methods:{
    getValue(val){
      // console.log(val);
      songSearch({keywords:val,limit:30,type:1,offset:0}).then(data=>{
        // console.log(data);
        this.list = data.data.result.songs;
      })
    },
    toplay(id){
      this.$router.push('/play/'+id)
    }
  }
};
</script>

<style scoped lang="scss">
.search-boxs{
  margin: 4vh 3vw;
  div.boxs{
    display: flex;
    padding: 1vh 3vw;
    box-shadow: 0 0 0.7vw 3vw #ccc;
    box-sizing: border-box;
    justify-content: center;
    justify-items: center;
    .left{
      flex: 7;
      height: 30vw;
      padding: 1vh;
      img{
        width: 29vw;
      }
    }
    .right{
      flex: 5;
      text-align: left;
      line-height: 30vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

    }
  }
}
</style>