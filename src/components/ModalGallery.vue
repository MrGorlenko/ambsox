<template>
  <div class="Modal  d-flex 
    justify-content-center 
    align-items-center">
    <div class="Modal__window ModalGallery__window d-flex align-items-center">
      <img 
      @click='closeModal()'
      src="@/assets/ModalClose.svg" alt="" 
      class="Modal__close">

      <div class="Modal__arrow Modal__arrow_prev">
        <img src="@/assets/arrowPrev.svg" alt="">
      </div>

      <swiper
        :slides-per-view="1"
        :space-between="10"
        :centeredSlides='true'
        :initialSlide='InitialSlide'
        :navigation="{
          nextEl: '.Modal__arrow_next',
          prevEl: '.Modal__arrow_prev'
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
        <swiper-slide v-for='n in 20' :key=n>
          <img class='w-100'
          src="https://images.squarespace-cdn.com/content/5a265c07e9bfdf7a6ed25906/1521663213784-8YM3DS9OT2SU9GWR1ZQB/AMBsox_classicGrip_Black.jpg?content-type=image%2Fjpeg" alt="">
        </swiper-slide>
      </swiper>

        <div class="Modal__arrow Modal__arrow_next">
          <img src="@/assets/arrowNext.svg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {Swiper, SwiperSlide} from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation])

export default {
  name: 'ModalGallery',
  components: {
    SwiperSlide, Swiper
  },
  computed: {
    ...mapState({
      InitialSlide: state => state.InitialSlideGallery
    })
  },
  methods: {
    ...mapMutations(['TRIIGER_MODAL_GALLERY']),
    closeModal(){
      this.TRIIGER_MODAL_GALLERY()
    },

    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  }
}
</script>

<style lang='scss'>

  .ModalGallery{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 16;
    &__window{
      padding: 13px;
      width: 700px;
      min-height: 500px;
      background-color: #fff;
      position: relative;
    }
  }

  .Modal{
    &__arrow{
      position: absolute;
      top: 0;
      z-index: 5;
      top: 292px;
      cursor: pointer;
      &_prev{
        left: -90px;
      }
      &_next{
        right: -90px;
      }
    }
  }

</style>