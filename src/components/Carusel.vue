<template>
  <div class="Carusel">
    <swiper 
    :slides-per-view="3.5"
    :space-between='50'
    @swiper="onSwiper"
    @slideChange="onSlideChange">
      <swiper-slide
      v-for='good in goods'
      :key='good'>
          <div @click='selectGood(good.info.title, good.info.price, good.info.oldPrice, good.colors, good.sizes, good.languages)'>
            <img class='Carusel__img' src="https://images.squarespace-cdn.com/content/5a265c07e9bfdf7a6ed25906/1521663213784-8YM3DS9OT2SU9GWR1ZQB/AMBsox_classicGrip_Black.jpg?content-type=image%2Fjpeg" alt="">
            <p class="Carusel__title">
              {{good.info.title}}
            </p>
            <p class="Carusel__price">
              CHF {{good.info.price}}
            </p>
          </div> 
      </swiper-slide>
    </swiper>
  </div>
    <Modal 
  v-if='ModalState == true'
  :title='goodTitle'
  :price='goodPrice'
  :oldPrice='goodPriceOld'
  :colors='goodColors'
  :sizes='goodSizes'
  :details='goodDetails'
  />
</template>

<script>
import Modal from '@/components/Modal'
import {mapState, mapMutations} from 'vuex'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/swiper.scss'
export default {
  name: 'Carusel',
  props: {
    'goods': Array
  },
  components: {
    Swiper, SwiperSlide,
    Modal
  },
  computed: {
    ...mapState({
      ModalState: state => state.Interface.ModalActive
    })
  },
  methods: {
      ...mapMutations(['TRIGGER_MODAL']),
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
      selectGood(title, price, oldPrice, colors, sizes, details){
        this.goodTitle = title
        this.goodPrice=price,
        this.goodPriceOld=oldPrice
        this.goodColors=colors
        this.goodSizes=sizes
        this.goodDetails=details
        this.TRIGGER_MODAL()
        document.body.style.overflow = 'hidden'
      }
    },
  data(){
    return{
      goodTitle: '',
      goodPrice: '',
      goodPriceOld: '',
      goodColors: [],
      goodSizes: [],
      goodDetails: []
    }
  }
}
</script>

<style lang='scss' scoped>

  .Carusel{
    padding-left: 20%;
    &__img{
      width: 100%;
    }
    &__title, &__price{
      text-align: start;
    }
    &__title{
      margin-top: 20px;
      font-size: 22px;
      line-height: 24px;
    }
    &__price{
      color: #666666;
      text-transform: uppercase;
      font-size: 16px;
      line-height: 20px;
    }
  }

</style>