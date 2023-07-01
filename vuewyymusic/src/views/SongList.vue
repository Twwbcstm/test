<template>
  <div>
    <div class="list-SONG">
        <head-view :title="'歌曲列表'"/>
    </div>
    <div class="song-boxs">
        <SonglistItem v-for="item in list" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script>
import {getSingersong} from '@/api/index'
import SonglistItem from '../components/sonlistitem/SonglistItem.vue'
import { getTrackall } from '../api'
import HeadView from '@/components/HeadView.vue'
export default {
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        // console.log(this.$route.params.type);
        if(this.$route.params.type==='1'){
            // console.log(222);
            getSingersong({id:this.$route.params.id}).then(data=>{
                // console.log(data);
                this.list = Object.freeze(data.data.hotSongs);
            })
        }else{
            getTrackall({id:this.$route.params.id,limit:50,offset:0}).then(data=>{
                this.list = Object.freeze(data.data.songs)
                // console.log(data);
               
            })
        }
    },
    components:{
        SonglistItem,
      HeadView
    }
}
</script>

<style scoped lang="scss">
// .list-SONG{
//     width: 100%;
//     height: 4vh;
//     position: fixed;
//     background-color: rgb(255, 94, 25);
//     color: aliceblue;
//     font-size: 2vh;
//     line-height: 4vh;
//     text-align: center;
//     top: 0;

// }
.song-boxs{
    padding: 4.5vh 3vw 3vh 3vw;
    background-color: burlywood;
    display: flex;
    flex-wrap: wrap;
   
}

</style>