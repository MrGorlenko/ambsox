<template>
  <div class="Shop">
    <div class="Shop__container d-flex 
    justify-content-between align-items-start flex-wrap">
      <h2 class='w-100 Shop__title' v-for='title in shopTitle' :key='title'>
        <p id='ShopTitle'></p>
      </h2>
      <div class="Shop__cats">
        <p :class="{'Shop__cat_active': isAll==true}" 
        @click='setAllCats()' class='Shop__cat' >
        <span v-for='allCat in allCats'
        :key='allCat'>
          <span v-if='allCat.isActive==true'>{{allCat.name}}</span>
        </span>
        </p>
        <p :class="{'Shop__cat_active': good.isActive==true && isAll==false}" 
        @click='setCat(cat)' class='Shop__cat'  
        v-for='(good, cat, index) in Goods' 
        :key='index'>
          <span v-for='c in good.catLangs'
          :key='c'>
            <span v-if='c.isActive==true'>
              {{c.name}}
            </span>
          </span>
        </p>
      </div>
      <div class="Shop__goods">
        <div v-for='good in Goods' :key='good'>
          <div class='Shop__items d-flex flex-wrap' v-if='good.isActive==true'>
            <div class='Shop__item' v-for='el in good.goods' :key='el'>
              <img class='w-100' 
              src="https://images.squarespace-cdn.com/content/5a265c07e9bfdf7a6ed25906/1521663213784-8YM3DS9OT2SU9GWR1ZQB/AMBsox_classicGrip_Black.jpg?content-type=image%2Fjpeg" alt="">
              <div class="Shop__goodAbout">
                <p class="Shop__itemTitle">{{el.info.title}}</p>
                <p class="Shop__itemPrice">CHF {{ parseFloat(el.info.price).toFixed(2)}}</p> 
                <!-- CHF {{ parseFloat(price).toFixed(2)}}    -->
              </div>
              <div class='Shop__button d-flex justify-content-center align-items-center'>
                <button @click='toggleModal(); 
                selectGood(el.info.title, el.info.price, el.info.oldPrice, el.colors, el.sizes, 
                el.languages)'>
                  <span v-for='button in buttons'
                  :key='button'>
                    <span v-if='button.isActive==true'>
                      {{button.name}}
                    </span>
                  </span>
                </button>
              </div>
              <div class='d-none' >
                <p v-for='lang in el.languages'
                :key='lang'
                >
                  <span v-if='lang.isActive==true'>
                    {{lang.description}}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
import {mapState, mapMutations} from 'vuex'
import Modal from '@/components/Modal'
export default {
  name: 'Shop',
  components: {
    Modal
  },
  computed: {
    ...mapState({
      shopTitle: state => state.ShopTitle,
      allCats: state => state.allCats,
      buttons: state => state.ButtonShop,
      Goods: state => state.Base.GOODS,
      ModalState: state => state.Interface.ModalActive
    })
  },
  mounted(){
    let Parcing = (str, destination) => {
      let ShopTitle = document.getElementById(destination);
      for (let letter of str){
       let span = document.createElement('span'),
      spanTwo = document.createElement('span');
      span.setAttribute('class', 'upper')
        if (letter == letter.toUpperCase()){
          span.innerHTML += letter
          ShopTitle.appendChild(span)
        }
        else if (letter != letter.toUpperCase() || letter == ' ' ) {
          spanTwo.innerHTML += letter
          ShopTitle.appendChild(spanTwo)
        }
      }
    }
    for (let [key, obj] of Object.entries(this.shopTitle)){
      if (obj.isActive == true){
        Parcing(obj.name, 'ShopTitle')
      }
    }


  },
  methods: {
    ...mapMutations(['SET_CAT', 'SET_ALL_CATS', 'TRIGGER_MODAL']),
    setAllCats(){
      this.SET_ALL_CATS()
      this.isAll = true
    },
    setCat(index){
      this.SET_CAT(index)
      this.isAll = false
    },
    toggleModal(){
      this.TRIGGER_MODAL()
      document.body.style.overflow = 'hidden'
    },
    selectGood(title,price,oldPrice, colors, sizes, details){
      this.goodTitle=title,
      this.goodPrice=price,
      this.goodPriceOld=oldPrice
      this.goodColors=colors
      this.goodSizes=sizes
      this.goodDetails=details
    }
  },
  data(){
    return {
      isAll: true,
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

<style lang='scss'>
  .Shop{
    &__container{
      width: 83%;
      margin: auto;
    }
    &__title{
      .upper{
        color:#FF994F;
        text-transform: lowercase;
        font-style: italic;
      }
      span{
        color: #C7C7C7;
        font-size: 32px;
        &:first-child{
          text-transform: uppercase;
        }
      }
    }
    &__cats{
      width: 140px;
    }
    &__cat{
      cursor: pointer;
      text-align: start;
      border-radius: 8px;
      padding: 12px 14px;
      transition: .1s ease;
      &_active{
        color: #FF994F;
        background: #FFFAF6;
      }
      &:hover{
        color: #FF994F;
        background: #FFFAF6;
      }
    }
    &__goods{
      width: 81%;
    }
    &__item{
      width: 23%;
      margin-right: calc( 8% / 3 );
      position: relative;
      margin-bottom: 20px;
      overflow: hidden;
      height: 226px;
      &:nth-child(4n + 4) {
        margin-right: 0;
      }
      &:hover{
        &::after{
          transition: .4s ease;
          position: absolute;
          top:0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
          content: '';
          background: rgba(0, 0, 0, 0.2);
        }
        .Shop{
          &__goodAbout{
            bottom: 0;
            transition: bottom .4s ease;
          }
          &__button{
            opacity: 1;
            transition: .1s ease;
            button{
              z-index: 2;
              cursor: pointer;
            }
          }
        }
      }

      &::after{
        transition: .4s ease;
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        content: '';
        background: rgba(0, 0, 0, 0);
      }

      img{
        height: 100%;
        object-fit: cover;
      }
    }
    &__button{
      transition: .1s ease;
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      opacity: 0;
      button{
        background: #FF994F;
        border-radius: 30px;
        color: #fff;
        border: none;
        padding: 8px 16px;
        z-index: 2;
      }
    }
    &__itemTitle, &__itemPrice{
      color: #fff;
      z-index: 2;
      position: relative;
      margin-bottom: 0;
    }
    &__itemTitle{
      font-size: 22px;
      line-height: 24px;
      margin-bottom: 8px;
    }
    &__itemPrice{
      font-size: 16px;
      line-height: 20px;
    }
    &__goodAbout{
      transition: bottom .4s ease;
      padding: 16px;
      position: absolute;
      bottom: -100%;
      left:0;
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
    }
  }
</style>