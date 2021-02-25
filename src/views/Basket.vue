<template>
  <div class="Basket">
    <div class="container d-flex ">
      <div class="col-7">
        <div class="Basket__title">
          <h2><span v-for='title in BasketTitles'
          :key='title'>
            <span v-if='title.isActive == true'>
              {{title.name}}
            </span>
          </span></h2>
        </div>

        <div class="Basket__item d-flex align-items-center" v-for='(good, index) in Goods' :key='good'>
          <div class="col-2 p-0">
            <img class='w-100' 
              src="https://images.squarespace-cdn.com/content/5a265c07e9bfdf7a6ed25906/1521663213784-8YM3DS9OT2SU9GWR1ZQB/AMBsox_classicGrip_Black.jpg?content-type=image%2Fjpeg" alt="">
          </div>
          <div class="col-7">
            <p class='Basket__name Basket__about' >{{good.name}}</p>
            <p class='Basket__color Basket__about'  
            v-if='good.color != null'>
              <span v-for="itemInfo in BasketColorSize"
              :key='itemInfo'>
                <span v-if='itemInfo.isActive==true'>
                  {{itemInfo.color}} :
                </span>
              </span>
            {{good.color}}</p>
            <p class='Basket__size Basket__about'  
            v-if='good.size != null'> 
            <span v-for="itemInfo in BasketColorSize"
              :key='itemInfo'>
                <span v-if='itemInfo.isActive==true'>
                  {{itemInfo.size}} :
                </span>
              </span>

             {{good.size}} </p>
          </div>
          <div class="col-3 pr-0 d-flex align-items-center justify-content-between">

            <div>
              <p>CHF {{good.price}}</p>
              <div class='d-flex align-items-center'>
                <button class='Basket__button' v-if='good.amount>1' @click='minusOne(index)'>-</button> 
                <button class='Basket__button' v-else disabled>-</button>
                  <span class='d-block Basket__amount' >{{good.amount}} </span>
                <button class='Basket__button' @click='plusOne(index)' >+</button> 
              </div>
            </div>
            
            <img class='Basket__remove' @click='removeGood(index); removeGoodPrice(good)'
             src="@/assets/remove.svg" alt="">
          </div>
        </div>

      </div>
      <div class="col-5">
        <div class="Basket__title">
          <h2><span v-for='sum in BasketSums'
          :key='sum'>
            <span v-if='sum.isActive == true'>
              {{sum.name}}
            </span>
          </span></h2>
          <hr class='w-100'>
          <div class='d-flex w-100 justify-content-between align-items-center'>
            <p>
              <span v-for='pay in BasketPays'
          :key='pay'>
            <span v-if='pay.isActive == true'>
              {{pay.name}}
            </span>
          </span>
            </p>
            <p class='Basket__finalPrice'>CHF {{ parseFloat(Overall).toFixed(2)}}</p>
          </div>

          <router-link to='/Checkout'>
            <button class='Basket__buy'>
              <span v-for='button in BasketButtons'
              :key='button'>
                <span v-if='button.isActive == true'>
                  {{button.name}}
                </span>
              </span>
            </button>
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Basket',
  computed: {
    ...mapState({
      Goods: state => state.Base.SelectedGoods,
      Overall: state => state.Base.OverallPrice,

      BasketTitles: state => state.BasketTitle,
      BasketSums: state => state.BasketSum,
      BasketPays: state => state.BasketPay,
      BasketButtons: state => state.BasketButton,
      BasketColorSize: state => state.BasketColorSize
    })
  },
  methods: {
    ...mapMutations(['REMOVE_GOOD', 'REMOVE_GOOD_PRICE', 'PLUS_ONE', 'MINUS_ONE']),
    removeGood(index){
      this.REMOVE_GOOD(index)
    },
    removeGoodPrice(price){
      this.REMOVE_GOOD_PRICE(price)
    },
    plusOne(index){
      this.PLUS_ONE(index)
    },
    minusOne(index){
      this.MINUS_ONE(index)
    }

  }
}
</script>

<style lang='scss'>
  .Basket{
    min-height: 100vh;
    &__title{
      background: #F9F9F9;
      border-radius: 8px;
      text-align: start;
      padding: 16px 24px;
    }
    &__item{
      padding: 12px 24px;
      min-height: 86px;
      background: #F9F9F9;
      border-radius: 8px;
      margin-top: 8px;
    }
    &__about{
      margin-bottom: 8px;
      text-align: start;
      color: #393939;
    }
    &__name{
      font-size: 18px;
      line-height: 120%;
    }
    &__color, &__size{
      font-size: 14px;
      line-height: 20px;
    }
    &__button{
      width: 30px;
      height: 30px;
      color: #585858;
      background: none;
      border: 2px solid #585858;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__amount{
      margin-left: 6px;
      margin-right: 6px;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #FF994F;
    }
    &__remove{
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    &__finalPrice{
      font-weight: bold;
      font-size: 22px;
      line-height: 20px;
      color: #393939;
    }
    &__buy{
      padding: 10px 20px;
      background: #FFC499;
      border-radius: 44px;
      border: none;
      transition: .3s ease;
      &:hover{
        transition: .3s ease;
        background: darken($color: #FFC499, $amount: 10);
      }
    }
  }
</style>