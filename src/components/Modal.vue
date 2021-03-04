<template>
  <div class="Modal Modal_shop d-flex 
  justify-content-lg-center 
  align-items-lg-center">
    <div class="Modal__window Modal__window_shop d-flex flex-lg-row flex-column">
      <img 
      @click='closeModal()'
      src="@/assets/ModalClose.svg" alt="" 
      class="Modal__close">

      <div class="col-lg-7 col-12 Modal__pics"
      :class="{'d-flex justify-content-center align-items-center':picsQuontity<4}">
        <swiper
        :space-between='10'
        :thumbs="{ swiper: thumbsSwiper }">
          <swiper-slide v-for="n in picsQuontity" :key='n'>
            <img class='' 
              src="https://images.squarespace-cdn.com/content/5a265c07e9bfdf7a6ed25906/1521663213784-8YM3DS9OT2SU9GWR1ZQB/AMBsox_classicGrip_Black.jpg?content-type=image%2Fjpeg" alt="">
          </swiper-slide>  
        </swiper>

        <swiper
        class='Modal__bottomPics'
          v-if='picsQuontity>=4'
          :space-between='10'
          :slides-per-view="4"
          @swiper="setThumbsSwiper"
          watch-slides-visibility
          watch-slides-progress
          @click='setThumbsSwiper'
        >
          <swiper-slide
           v-for="n in picsQuontity" :key='n'>
            <img class='' 
              src="https://images.squarespace-cdn.com/content/5a265c07e9bfdf7a6ed25906/1521663213784-8YM3DS9OT2SU9GWR1ZQB/AMBsox_classicGrip_Black.jpg?content-type=image%2Fjpeg" alt="">
          </swiper-slide> 
        </swiper>
      </div>

      <div class="col-lg-5 col-12 Modal__content d-flex flex-column justify-content-between">
        <div>
          <h4 class='Modal__title'>{{title}}</h4>

          <p class='Modal__price'>CHF {{parseFloat(price).toFixed(2)}}</p>
          <p v-if='oldPrice!=""' class='Modal__price_old'>CHF {{ parseFloat(oldPrice).toFixed(2)}}</p>

          <hr class="Modal__line">
        </div>

        <div v-if='colors.length>1'>
          <div class='Modal__label'>
            <p v-for='label in modalLabelColor'
            :key='label'>
              <span v-if='label.isActive==true'>{{label.name}}</span>
            </p>
          </div>

          <div class="Modal__colors d-flex ">
            <div class='Modal__color'
            @click='selectColor(color)' 
            v-for='color in colors'
            :key='color'
            :style='"background-color:" + color.color'
            :class="{'Modal__color_white': color.color=='#fff' || color.color=='#ffffff'}">
            <div
            :class="{'Modal__colorChosed': selectedColor.name == color.name, 
            'Modal__colorChose': selectedColor.name != color.name}"
            class=" d-flex justify-content-center
            align-items-center">
              <div
              class='Modal__tiny d-flex justify-content-center
            align-items-center'
              :class="{'Modal__color_white': color.color=='#fff' || color.color=='#ffffff'}"
              >
                <div 
                 v-if='selectedColor.name == color.name'
                 :class="{'Modal__color_white': color.color=='#fff' || color.color=='#ffffff',
                 'Modal__tinest_white': color.color=='#fff' || color.color=='#ffffff'}"
                 class='Modal__tinest'></div>
                </div>
              </div>
              <div v-if='selectedColor.name == color.name' 
              class='Modal__colorName'>
                {{color.name}}
              </div>
            </div>
          </div>
        </div>

        <div
        v-if='Object.getOwnPropertyNames(this.sizes).length > 1'
         class='Modal__sizes d-flex align-items-center flex-wrap'>
          <div class='Modal__label w-100'>
            <p v-for='label in modalLabelSize' :key='label'>
              <span v-if='label.isActive==true'>
                {{label.name}}
              </span>
            </p>
          </div>
          <div class='Modal__size'
          :class="{'Modal__size_active': selectedSize == sizeK + sizeV}"
          @click='selectSize(sizeK + sizeV)' 
          v-for='(sizeV, sizeK) in sizes' :key='sizeV'>
            {{sizeK}} - {{sizeV}}
          </div>
        </div>

        <div class="Modal__buttonWrapper w-100 d-flex justify-content-start">
          

          
          <button 
            v-if='validColor == true && validSize == true'
            @click='selectGood(title, price,
            selectedSize,selectedColor.name)'
            class='Modal__button Modal__button_able'>
            <span v-for='label in modalButton'
            :key='label'>
              <span v-if='label.isActive==true'>
                {{label.name}}
              </span>
            </span>
          </button>

          <button 
            v-else
            disabled
            class='Modal__button'>
            <span v-for='label in modalButton'
            :key='label'>
              <span v-if='label.isActive==true'>
                {{label.name}}
              </span>
            </span>
          </button>
        </div>

        <div class='Modal__list d-flex flex-column justify-content-end' 
        v-for='detail in details' :key='detail'>
          <ul v-if='detail.isActive==true'>
            <li v-for='el in detail.description' :key='el'>
              {{el}}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SwiperCore, { Thumbs } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/swiper.scss'
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
SwiperCore.use([Thumbs]);
export default {
  name: 'Modal',
  props: {
    title   : String,
    price   : Number,
    oldPrice: Number,
    colors  : Array,
    sizes   : Object,
    details : Object
  },
  components:{
    Swiper, SwiperSlide
  },
  computed: {
    ...mapState({
      modalLabelColor: state => state.ModalLabelColor,
      modalLabelSize: state => state.ModalLabelSize,
      modalButton: state => state.ModalButton
    })
  },
  mounted(){
    if (this.colors.length<2){
      this.validColor = true
    }
    if (Object.getOwnPropertyNames(this.sizes).length < 2){
      this.validSize = true
    }
  },
  methods: {
    ...mapMutations(['TRIGGER_MODAL', 'SELECT__GOOD']),
    closeModal() {
      this.TRIGGER_MODAL()
      document.body.style.overflow = 'initial'
    },
    selectColor(color){
      this.selectedColor = color
      this.validColor = true
    },
    selectSize(size){
      this.selectedSize = size
      this.validSize = true
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    selectGood(title, price, size, color){
      let item = {}
      item.title = title
      item.price = price
      item.size = size
      item.color = color
      this.SELECT__GOOD(item)
      this.TRIGGER_MODAL()
      document.body.style.overflow = 'initial'
    }
  },
  data(){
    return{
      selectedColor: '',
      selectedSize: '',
      thumbsSwiper: null,
      picsQuontity: 7,
      validColor: false,
      validSize: false
    }
  }
}
</script>

<style lang='scss' scope>
  $list-height: 100px;
  .Modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 16;

    &_shop{
    .swiper-container{
      width: 90%;
    }
    .swiper-slide{
      img{
        width: 80%;
      }
    }
    .swiper-wrapper{
      padding: 18px 0px;
    }
    
    img{
      box-shadow: 0px 4px 16px rgba(0,0,0,0.15);
    }
    }
    &__close{
      position: absolute;
      right: -55px;
      top: -55px;
      cursor: pointer;
      border-radius: 100px;
    }
    &__window{
      border-radius: 12px;
      position: relative;
      width: 73%;
      background-color: #fff;
      padding: 32px;
      &_shop{
        min-height: 83%;
        max-height: 84%;
      }
    }
    &__bottomPics{
      img{
        width: 80% !important;
      }
    }
    &__title, &__price{
      text-align: start;
    }
    &__title{
      font-weight: bold;
      font-size: 48px;
    }
    &__content{
      position: relative;
      padding-bottom: $list-height;
    }
    &__price{
      color: #FF994F;
      font-weight: bold;
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 0;
      &_old{
        text-align: start;
        margin-bottom: 0;
        text-decoration-line: line-through;
        color: #666666;
      }
    }
    &__line{
      background-color: #C7C7C7;
      width: 100%;
    }
    &__label{
      p{
        text-align: start;
      }
    }
    &__colors{
      min-height: 78px;
    }
    &__color{
      width: 48px;
      height: 48px;
      border-radius: 100px;
      margin-right: 16px;
      position: relative;
      cursor: pointer;
      &_white{
        border: 1px solid black;
      }
      &:hover{
        .Modal__colorChose{
          opacity: 1;
        }
      }
    }
    &__colorChosed, &__colorChose{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      div{
        border-radius: 100px;
        border: 4px solid #FFFFFF;
      }
      .Modal__color_white{
        // border: 1px solid black;
        border: 4px solid #000;
      }
    }
    &__tiny{
      width: 28px;
      height: 28px;
      background: none;
    }
    &__tinest{
      width: 12px;
      height: 12px;
      background: #fff;
      &_white{
        background: #000;
      }
    }
    &__colorChose{
      opacity: 0;
    }
    &__colorName{
      margin-top: calc(100% + 6px);
      background: #393939;
      border-radius: 2px;
      color: white;
      font-size: 12px;
    }
    &__size{
      cursor: pointer;
      background: #EBEBEB;
      border-radius: 66px;
      padding: 8px 12px;
      margin-right: 9px;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      &:hover, &_active{
        background: #FFC499;
      } 
    }
    &__button{
      background-color:#FFC499;
      padding: 10px 20px;
      font-size: 18px;
      line-height: 24px;
      border-radius: 44px;
      border: none;
      outline: none;
      &Wrapper{
        margin-top: 20px;
      }
      &_able{
        &:hover{
          background-color: darken($color: #FFC499, $amount: 5);
        }
      }
    }
    &__list{
      text-align: start;
      position: absolute;
      bottom: 18px;
      min-height: $list-height;
      ul {
        padding-left: 0;
        margin-bottom: 0;
        height: auto;
        li{
          margin-left: 20px;
        }
      }
    }
  }

  @media (max-width: 992px){
    .Modal{
      &__window{
        &_shop{
        width: 100%;
        position: fixed;
        left:0;
        bottom: 0;
        border-radius: 12px 12px 0px 0px;
        overflow-y: scroll;
        }
        &_shop{
          min-height: 93%;
          max-height: 94%;
        }
      }
      &__close{
        right: 10px;
        top: 10px;
      }
    }
  }
</style>