<template>
  <div class="list-box" @click="toplay">
   
    <div class="list-left">
        <img :src="list.picUrl" alt="">
    </div>
    <div class="list-right">
        <p>{{list.name }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props:['list'],
  methods:{
    toplay(){
      switch(this.$route.params.type){
        case '1':
        case '2':
          this.$router.push('/songlist/'+this.$route.params.type+'/'+this.list.id)
          break;

        case '3':
          this.$router.push('/play/'+this.list.id)
          break;

        default:
          break;

      }
      
    }
      
   
  },
  components:{
    // HeadView
  },
  mounted(){
    // console.log(this.$route.params.type);
    
  }
}
</script>

<style scoped lang="scss">
.list-box{
  display: flex;
  padding: 1vh;
  .list-left{
    flex: 5;
    img{
      width: 20vw;
      box-shadow: 0 0 0.7vh 0.5vh #b9b6b6;
      &:hover{
        transform-origin: center center;
        animation: trans 1s;
      }
    }
  }
  .list-right{
    flex: 7;
    line-height: 15vw;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    // overflow: hidden;
  }
}

@keyframes trans {
  from {
    transform: scale3d(1,1,1);
  }
  to{
    transform: scale3d(1.3,1.3,1.3);
  }
}
</style>