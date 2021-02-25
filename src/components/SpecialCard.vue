<template>
  <div class="Card d-flex flex-column justify-content-between align-items-start">
    <h2 class='Card__title'>{{title}}</h2>
    <img class='w-100 Card__img' 
      src="https://images.squarespace-cdn.com/content/5a265c07e9bfdf7a6ed25906/1521663213784-8YM3DS9OT2SU9GWR1ZQB/AMBsox_classicGrip_Black.jpg?content-type=image%2Fjpeg" alt="">
    <p class='Card__price'>CHF {{ parseFloat(price).toFixed(2)}}</p>

    <p class='Card__typeOf'> 
      <span v-for='lang in languages' :key='lang'>
        <span v-if='lang.isActive==true'>
          {{lang.typeOf}}
        </span>
      </span>
    </p>

    <p class='Card__orange'>
      <span v-for='lang in languages' :key='lang'>
        <span v-if='lang.isActive==true && lang.orangeWritten!=""'>
          {{lang.orangeWritten}}
        </span>
      </span>
    </p>

    <div v-for='lang in languages' :key='lang'>
      <ul class='Card__info' v-if='lang.isActive==true'>
        <li v-for='(val, name) in lang.top' :key=val>
          <span>{{name}}</span> - {{val}}
        </li>
      </ul>
    </div>

    <div v-for='lang in languages' :key='lang'>
      <ul class='Card__list' v-if='lang.isActive==true'>
        <li v-for='(name) in lang.middle' :key=name>
          {{name}} 
        </li>
      </ul>
    </div>

    <div v-for='lang in languages' :key='lang'>
      <ul class='Card__info' v-if='lang.isActive==true'>
        <li v-for='(val, name) in lang.bottom' :key=val>
          <span>{{name}}</span> - {{val}}
        </li>
      </ul>
    </div>

    <button @click='selectGood(title, price)' class='Card__button'>
      <span v-for='button in cardButton' :key='button'>
        <span v-if='button.isActive == true'>
          {{button.name}}
        </span>
      </span>
    </button>

  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Card',
  props: {
    'title'     : String,
    'price'     : Number,
    'languages' : Object
  },
  methods: {
    ...mapMutations(['SELECT__GOOD']),
    selectGood(title, price){
      let item = {}
      item.title = title
      item.price = price
      this.SELECT__GOOD(item)
    }

  },
  computed: {
    ...mapState({
      cardButton: state => state.ModalButton
    })
  }
}
</script>

<style lang='scss'>
  .Card{
    border-radius: 10px;
    border: 1px solid #C7C7C7;
    padding: 24px;
    width: 100%;
    &__title, &__price, &__typeOf, &__orange{
      text-align: start;
    }
    &__typeOf, &__orange{
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
    }
    &__title{
      color: #393939;
      font-weight: bold;
      font-size: 28px;
      line-height: 38px;
    }
    &__img{
      max-height: 160px;
      object-fit: cover;
      border-radius: 15px;
    }
    &__price{
      font-size: 36px;
      color: #393939;
      margin-bottom: 0;
    }
    &__typeOf{
      color: #C7C7C7;
      text-transform: uppercase;
      margin-bottom: 0;
    }
    &__orange{
      color: #FF994F;
    }
    &__list{
      padding-left: 20px;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      color: #585858;
      list-style-type: none;
      li{
        text-align: start;
        position: relative;
        margin-bottom: 12px;
        &::before{
          position: absolute;
          top: 4px;
          left: -20px;
          display: block;
          content: '';
          width: 8px;
          height: 8px;
          border: 2px solid #FF994F;
          border-radius: 100px;
        }
      }
    }
    &__info{
      font-size: 14px;
      line-height: 24px;
      padding-left: 0;
      li{
        list-style-type: none;
        text-align: start;
        span{
          font-weight: bold;
          color: #585858;
        }
      }
    }
    &__button{
      background: #FFC499;
      border-radius: 44px;
      padding: 10px 20px;
      width: auto;
      border: none;
    }
  }
</style>