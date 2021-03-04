<template>
  <div class="Checkout">
    <div class="container d-flex align-items-center
    justify-content-center flex-column">
      <div class="Checkout__step">
        <h2 class='Checkout__title w-100'>Your email</h2>

        <div class="Checkout__inputBox
        d-flex flex-column align-items-start">
          <label for="email">Your email</label>
          <input class='Checkout__input w-60' type="text" placeholder='Example@mail.com'>
          <p>You will receive notification on your email</p>
        </div>

      </div>

      <div class="Checkout__step d-flex flex-wrap">
        <h2 class="Checkout__title w-100">Shipping</h2>

        <div class="Checkout__inputBox d-flex flex-column align-items-start
         w-50">
         <label for="FirstName">First Name</label>
         <input placeholder="First Name" type="text" class="Checkout__input w-95">
         </div>
        <div class="Checkout__inputBox d-flex flex-column align-items-end
         w-50">
         <label class='w-100 pl5' for="Second Name">Second Name</label>
         <input placeholder='Second Name' class='Checkout__input w-95' type="text">
         </div>

        <div class="Checkout__inputBox w-100 mt-4
        d-flex flex-column align-items-start">
          <label for="Address1">Address 1</label>
          <input class='Checkout__input w-100' type="text" placeholder='Address 1'>
        </div>

        <div class="Checkout__inputBox w-100 mt-4
        d-flex flex-column align-items-start">
          <label for="Address2">Address 2</label>
          <input class='Checkout__input w-100' type="text" placeholder='Address 2'>
        </div>

        <div class="Checkout__inputBox w-100 mt-4
        d-flex flex-column align-items-start">
          <label for="Address2">Country</label>
          <select class='Checkout__input w-100'>
            <option value="Swiss">Switzerland</option>
          </select>
        </div>

        <div class="Checkout__inputContainer w-100 d-flex justify-content-between">
          
        <div class="Checkout__inputBox mt-4
        d-flex flex-column align-items-start w-32">
          <label for="Postal Code ">Postal Code</label>
          <input class='Checkout__input w-100' 
          type="text" placeholder="Postal Code">
        </div>

        <div class="Checkout__inputBox mt-4
        d-flex flex-column align-items-start w-32">
          <label for="Postal Code ">Postal Code</label>
          <input class='Checkout__input w-100' 
          type="text" placeholder="Postal Code">
        </div>

        <div class="Checkout__inputBox mt-4
        d-flex flex-column align-items-start w-32">
          <label for="Postal Code ">Postal Code</label>
          <input class='Checkout__input w-100' 
          type="text" placeholder="Postal Code">
        </div>

        </div>
      </div>


      <div class="Checkout__step">
        <h2 class="Checkout__title">
          Shipping options
        </h2>

        <div class='d-flex align-items-center Checkout__shippingOption'>
          <input type="radio">
          <span>Switzerland - CHF 0.00</span>
        </div>
      </div>

      <div class="Checkout__step">
        <h2 class="Checkout__title">
          Payment
        </h2>

        <div class="Checkout__inputBox
        d-flex flex-wrap align-items-start">
          <label class='w-100' for="Card">Card Number</label>

          <div class="Checkout__cardWrapper w-100">
            <input class='Checkout__CardInput Checkout__CardInput_big pr-0' 
            type="text" placeholder="Card Number">
            <input class='Checkout__CardInput Checkout__CardInput_small pr-0' 
            type="text" placeholder="MM/YY">
            <input class='Checkout__CardInput Checkout__CardInput_small pr-0' 
            type="text" placeholder="CVC">
          </div>
          <p>Transactions are secure and encrypted</p>
        </div>

        <hr class='w-100'>

        <div class="Checkout__inputBox
        d-flex flex-column align-items-start">
          <label for="promo">Promocode</label>
          <div class='d-flex'>
            <input class='Checkout__input' placeholder='Promocode' type="text">
            <button class="Checkout__promocodeButton">
              Apply
            </button>
          </div>
        </div>

        <div class='Checkout__askForBilling d-flex align-items-center'>
          <input type="checkbox">
          <p>Billing address <span>(Use shipping address)</span> </p>
        </div>

        
      </div>

      
      

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Checkout',
  computed:{
    ...mapState({
      CheckOut: state => state.CheckOut,
      Goods: state => state.Base.SelectedGoods,
      BasketColorSize: state => state.BasketColorSize
    })
  },
  methods:{
    // confirmEmail(email){
    //   // if (this.validEmail(email)){
    //     this.firstStep = true
    //     this.errorMail = ''
    //     // }
    //   // else {
    //     // this.errorMail = 'please enter the correct email'
    //     // }
    //     this.country = 'Switzerland'
    // },
    validEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    },

  },
  data(){
    return {
    }
  }
}
</script>

<style lang='scss'>

  .Checkout{
    padding-bottom: 141px;
    .w-32{
      width: 32%;
    }
    .w-60{
      width: 60%;
    }
    .w-95{
      width: 95%;
    }
    .pl5{
      padding-left: 5%;
    }
    &__title{
      text-align: start;
      margin-bottom: 32px;
    }
    &__step{
      width: 600px;
      margin-bottom: 48px;
    }
    &__inputBox{
      label {
        text-align: start;
      }
    }
    &__shippingOption{
      background: rgba(240, 244, 248, 0.5);
      border-radius: 8px;
      padding: 12px;
      span{
        margin-left: 10px;
      }
    }
    &__input{
      padding: 12px;
      background: #F0F4F8;
      border-radius: 8px;
      box-shadow: inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1);
      border: none;
      outline: none;
      &:focus{
        background: none;
        box-shadow: 0px 0px 0px 4px rgba(255, 139, 111, 0.2);
        outline: none;
        border: #ffa9a9;
      }
    }
    &__cardWrapper{
      background: #F0F4F8;
      box-shadow: inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1);
      border-radius: 8px;
    }
    &__CardInput{
      padding: 12px;
      border: none;
      outline: none;
      &_big{
        width: 80%;
        border: none;
        background: none;
      }
      &_small{
        width:13%;
        margin-left: -3%;
        padding-left: 0;
        border: none;
        background: none;
      }
    }
    &__promocodeButton{
      background: linear-gradient(135deg, #FF5F6D 2.88%, #FFC371 100%);
      border-radius: 44px; 
      border: none;
      padding: 10px 20px;
      color: #fff;
      margin-left: 12px;
    }
    &__askForBilling{
      background: rgba(240, 244, 248, 0.5);
      border-radius: 8px;
      padding: 12px;
      p{
        margin-bottom: 0;
      }
    }
  }
</style>