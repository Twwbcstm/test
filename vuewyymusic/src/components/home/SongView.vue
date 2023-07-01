<template>
  <div class="songBox">
    <div class="songBoxTitle">
        <h1><i>|</i>{{ title }}</h1>
        <span>
            <router-link :to="'/list/'+type">更多...</router-link>
        </span>
    </div>
    <div class="songBoxItem">
        <ItemView v-for="item in data" :key="item.id" :data="item" :type="type"/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    props:['title','data','type'],
    components:{
        ItemView:defineAsyncComponent(()=>import('./ItemView.vue'))
    }
}
</script>

<style scoped lang="scss">
.songBox{
    margin: 0.3vh 0.3vw;
    .songBoxTitle{
        display: flex;
        background-color: antiquewhite;
        padding: 1vh;
        font-size: 2vh;
        h1{
            flex: 8;
            i{
                padding: 0 1vh 0 0;
                color: rgb(127, 148, 255);
                
            }
        }
        span{
            flex: 4;
            text-align: right;
            a{
                font-size: 1.5vh;
            }
        }
    }
    .songBoxItem{
        display: flex;
        flex-wrap: wrap;
        box-shadow: 0 0 0.7vh 0.5vh #ccc;
        padding: 1vh;
    }
}

</style>