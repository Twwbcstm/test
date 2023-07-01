<template>
  <div class="head">
    <div class="back" @click="goback"><i>返回</i></div>
    <div class="content">{{ title }}
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props:['title'],
    methods:{
        goback(){
            this.$router.back();
        }
    }
}
</script>

<style scoped lang="scss">
.head{
    width: 100%;
    height: 5vh;
    text-align: center;
    color: aliceblue;
    background-color: rgb(241, 59, 59);
    position: fixed;
    top: 0;
    display: flex;
    line-height: 5vh;
    z-index: 999;
    .back{
        flex: 2;
        i{
            font-size: 2vh;
        }
        &:hover{
            cursor: pointer;
        }
    }
    // box-sizing: border-box;

    .content{
        flex: 10;
        font-size: 2vh;
        font-weight: bold;

    }
}

</style>