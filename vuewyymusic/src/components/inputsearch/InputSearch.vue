<template>
  <div class="input-box">
    <input type="text" name="" id="" @blur="onblur" @keyup="keyup" v-model="value">
  </div>
</template>

<script>
export default {
    data(){
        return {
            value:''
        }
    },
    methods:{
        onblur(){
            // console.log(this.value);
            if(this.value!==''){
                this.$emit('getInputValue',this.value) 
            }
        },
        keyup(val){
            // console.log(val.key);
            if(val.key==='Enter' && this.value!==''){
                this.$emit('getInputValue',this.value) 
            }
        }
    }
}
</script>

<style scoped lang="scss">
.input-box{
    padding: 0 1vw;
    input{
        box-sizing: border-box;
        width: 100%;
        height: 4vh;
        padding: 0.1vh 2vw;
        border-radius: 2vw;
    }
}

</style>