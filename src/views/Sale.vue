<template>
  <div class="Sale">
    <div class="container">
      <div class="Sale__items d-flex justify-content-center">
        <swiper
        class='ml-0 mr-0 w-75'
        :slides-per-view="SpecialGoods.length>2 ? 3 : 2"
        :space-between="50"
        :setWrapperSize='true'
        :centeredSlides="SpecialGoods.length>2 ? true : false"
        >
          <swiper-slide 
          v-for='special in SpecialGoods'
          :key='special'>
          <Card
          class='Sale__card'
          :title='special.info.title'
          :price='special.info.price'
          :languages='special.languages'
          />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {mapState} from 'vuex'
import Card from '@/components/SpecialCard.vue'
export default {
  name: 'Sale',
  components: {
    Card,
    Swiper, SwiperSlide
  },
  computed: {
    ...mapState({
      SpecialGoods: state => state.Base.SpecialGoods
    })
  }
}
</script>

<style lang='scss'>
  .Sale{
    &__card{
      height: 100%;
    }
  }
</style>