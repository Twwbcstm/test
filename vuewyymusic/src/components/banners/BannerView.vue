<template>
  <div class="bannerBoxs">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :pagination="{ clickable: true}"
      :autoplay="{ delay: 2500, disableOnInteraction: false}"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide v-for="item in banners" :key="item.targetid"><a :href="item.url"><img :src="item.imageUrl" alt="" /></a></swiper-slide>
      <!-- <swiper-slide><img src="" alt="" />15635146</swiper-slide>
      <swiper-slide><img src="" alt="" />15635146</swiper-slide> -->
    </swiper>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue' // swiper 所需组件
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'// 分页器
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  props:['banners'],
  data(){
    return {
     
      modules:[Autoplay, Pagination, Navigation, A11y]
    }
  },
    components:{
        Swiper,
        SwiperSlide

    }
}
</script>

<style scoped lang="scss">
.bannerBoxs{
  margin: 1vh 0;
}

</style>