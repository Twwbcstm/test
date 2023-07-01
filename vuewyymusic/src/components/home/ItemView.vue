<template>
  <div class="itemBox" @click="toplay">
    <div class="top">
        <img :src="data.picUrl" :alt="data.name">
    </div>
    <div class="bottom">
        <span>{{ data.name }}</span>
    </div>
  </div>
</template>

<script>

export default {
    props:['data','type'],
    methods:{
        toplay(){
            // console.log(this.data,this.type);
            // this.$router.push('/play/'+this.data.id)
            // if(this.type===1){
            //     console.log(12313);
            // }
            switch(this.type){
                case 1:
                    this.$router.push('/songlist/'+this.type+'/'+this.data.id)
                    break;
                case 2:
                    this.$router.push('/songlist/'+this.type+'/'+this.data.id)
                    break;
                case 3:
                    this.$router.push('/play/'+this.data.id)
                    break;

                default:
                    break;
                
            }
        }
    },
    
}
</script>

<style scoped lang="scss">
.itemBox{
    width: 25%;
    padding: 1vw;
    box-sizing: border-box;
    text-align: center;
    .top{
        img{
            width: 100%;
            height: 21vw;
            box-shadow: 0 0 0.7vh 0.5vh #eee;
            
            &:hover{
                transform-origin: center center ;
                animation: fd 1s;
            }
        }
    }
    .bottom{
        span{
            text-overflow: ellipsis;
        }
    }

}

@keyframes fd {
    from{
        transform: scale(1,1);
    }
    to{
        transform: scale(1.3,1.3);
    }
}

</style>