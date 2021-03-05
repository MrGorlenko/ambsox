<template>
  <div class="Checkout">
    <router-link class='Checkout__close' to='/Basket'>
      <img src="@/assets/ModalClose.svg" alt="">
    </router-link>
    <div class="container d-flex align-items-center
    justify-content-center flex-column">
      <div class="Checkout__step">
        <h2 class='Checkout__title w-100'>Your email</h2>

        <div class="Checkout__inputBox
        d-flex flex-column align-items-start">
          <label for="email">Your email</label>
          <input
           :class="{'Checkout__errorInput': validMail==false}"
           v-model='mail' class='Checkout__input w-60' type="text" placeholder='Example@mail.com'>
          <p class='Checkout__sublabel'>You will receive notification on your email</p>
        </div>

      </div>

      <div class="Checkout__step d-flex flex-wrap">
        <h2 class="Checkout__title w-100">Shipping</h2>

        <div class="Checkout__inputBox d-flex flex-column align-items-start
         w-50">
         <label for="FirstName">First Name</label>
         <input
         :class="{'Checkout__errorInput': validFirstName==false}"
          v-model='firstName' placeholder="First Name" type="text" class="Checkout__input w-95">
         </div>
        <div class="Checkout__inputBox d-flex flex-column align-items-end
         w-50">
         <label class='w-100 pl5' for="Second Name">Second Name</label>
         <input
          :class="{'Checkout__errorInput': validSecondName==false}"
          v-model='secondName' placeholder='Second Name' class='Checkout__input w-95' type="text">
         </div>

        <div class="Checkout__inputBox w-100 mt-4
        d-flex flex-column align-items-start">
          <label for="Address1">Address 1</label>
          <input
           :class="{'Checkout__errorInput': validAddress1==false}"
           v-model="Address1" class='Checkout__input w-100' type="text" placeholder='Address 1'>
        </div>

        <div class="Checkout__inputBox w-100 mt-4
        d-flex flex-column align-items-start">
          <label for="Address2">Address 2</label>
          <input v-model='Address2' class='Checkout__input w-100' type="text" placeholder='Address 2'>
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
          <input
           :class="{'Checkout__errorInput': validPostalCode==false}"
           v-model='PostalCode' class='Checkout__input w-100' 
          type="text" placeholder="Postal Code">
        </div>

        <div class="Checkout__inputBox mt-4
        d-flex flex-column align-items-start w-32">
          <label for="Postal Code ">City</label>
          <input
           :class="{'Checkout__errorInput': validCity==false}"
           v-model='City' class='Checkout__input w-100' 
          type="text" placeholder="City">
        </div>

        <div class="Checkout__inputBox mt-4
        d-flex flex-column align-items-start w-32">
          <label for="Postal Code ">State</label>
          <input
           :class="{'Checkout__errorInput': validState==false}"
           v-model='State' class='Checkout__input w-100' 
          type="text" placeholder="State">
        </div>

        </div>
      </div>


      <div class="Checkout__step">
        <h2 class="Checkout__title">
          Shipping options
        </h2>

        <div class='d-flex align-items-center Checkout__shippingOption'>
          <input type="radio" checked>
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

          <div  class="Checkout__cardWrapper w-100"
          :class="{'Checkout__errorInput': 
          validCardNumber==false || validCardDate==false || validCVC==false}">
            <input
            id='creditCard'
            v-model='card'
             class='Checkout__CardInput Checkout__CardInput_big pr-0' 
            type="text" placeholder="Card Number">
            <input 
             v-model='cardDate'
             id='MMYY'
             class='Checkout__CardInput Checkout__CardInput_small pr-0' 
            type="text" placeholder="MM/YY">
            <input
            v-model='cvc'
             id='cvc'
             class='Checkout__CardInput Checkout__CardInput_small pr-0' 
            type="text" placeholder="CVC">
          </div>
          <p class='Checkout__sublabel'>Transactions are secure and encrypted</p>
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

        <!-- <input type="text" id="test-field" v-model="maskedField" /> -->

        <!-- <div class='Checkout__askForBilling d-flex align-items-center'>
          <input type="checkbox" checked >
          <p class='Checkout__billingLabel'>Billing address <span>(Use shipping address)</span> </p>
        </div> -->

        
      </div>

      <button @click='submit(mail, PostalCode)' class="Checkout__submit">
        Order
      </button>

      
      

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Inputmask from 'inputmask';
export default {
  name: 'Checkout',
  computed:{
    ...mapState({
      CheckOut: state => state.CheckOut,
      Goods: state => state.Base.SelectedGoods,
      BasketColorSize: state => state.BasketColorSize,
      Overall: state => state.Base.OverallPrice,
    })
  },
  methods:{
    ValidEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    },

    ValidPostalCode: function(code){
      var re = /^\d+$/;
      return re.test(code)
    },

    submit(email, code){

      if (this.ValidEmail(email)){
        this.validMail = true
      } 
      else {
        this.validMail = false
      }

      if (this.firstName.length > 2){
        this.validFirstName = true
      } else {
        this.validFirstName = false
      }

      if (this.secondName.length > 2){
        this.validSecondName = true
      } else {
        this.validSecondName = false
      }

      if (this.secondName.length > 2){
        this.validSecondName = true
      } else {
        this.validSecondName = false
      }

      if (this.Address1.length > 2){
        this.validAddress1 = true
      } else {
        this.validAddress1 = false
      }

      if (this.ValidPostalCode(code) && this.PostalCode.length == 4){
        this.validPostalCode = true
      } else {
        this.validPostalCode = false
      }

      if (this.City.length > 5){
        this.validCity = true
      } else {
        this.validCity = false
      }

      if (this.State.length > 5){
        this.validState = true
      } else {
        this.validState = false
      }

      if (this.card.length == 19){
        this.validCardNumber = true
      } else {
        this.validCardNumber = false
      }

      if (this.cardDate.length == 5){
        this.validCardDate = true
      } else {
        this.validCardDate = false
      }

      if (this.cvc.length == 3){
        this.validCVC = true
      } else {
        this.validCVC = false
      }

      let CustomerInfo={

      }

      if ( this.validMail == true && 
      this.validFirstName == true &&
      this.validSecondName == true &&
      this.validAddress1 == true &&
      this.validPostalCode == true &&
      this.validCity == true &&
      this.validState == true &&
      this.validCardNumber == true &&
      this.validCardDate == true &&
      this.validCVC == true ) {
          CustomerInfo.goods = this.Goods
          CustomerInfo.cost = this.Overall
          CustomerInfo.mail = this.mail
          CustomerInfo.firstName = this.firstName
          CustomerInfo.secondName = this.secondName
          CustomerInfo.Address1 = this.Address1
          CustomerInfo.Address2 = this.Address2
          CustomerInfo.PostalCode = this.PostalCode
          CustomerInfo.City = this.City
          CustomerInfo.State = this.State

          console.log(CustomerInfo)
      }

    }

  },
  mounted () {
    var im = new Inputmask("9999 9999 9999 9999");
    im.mask(document.getElementById('creditCard'));

    var cvc = new Inputmask('999')
    cvc.mask(document.getElementById('cvc'))

    var mm_yy = new Inputmask('99/99')
    mm_yy.mask(document.getElementById('MMYY'))

   },
  data(){
    return {
      mail: '',
      firstName: '',
      secondName: '',
      Address1: '',
      Address2: '',
      PostalCode: '',
      City: '',
      State: '',

      card: '',
      cardDate: '',
      cvc: '',


      validMail: null,
      validFirstName: null,
      validSecondName: null,
      validAddress1: null,
      validPostalCode: null,
      validCity: null,
      validState: null,

      validCardNumber: null,
      validCardDate: null,
      validCVC: null


    }
  }
}
</script>

<style lang='scss'>

  .Checkout{
    padding-bottom: 141px;
    &__close{
      position: absolute;
      top: 20px;
      right: 20px;
    }
    &__errorInput{
      border: 1px solid red !important;
      box-shadow: none !important;
    }
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
      margin-top: 16px;
      p{
        margin-bottom: 0;
      }
    }
    &__billingLabel{
      margin-left: 8px;
      span{
        color: #8C8CA1;
      }
    }
    &__submit{
      width: 600px;
      background: #FFC499;
      border-radius: 44px;
      padding: 10px 20px;
      border: none;
      transition: .2s ease;
      &:hover{
        transition: .2s ease;
        background: darken($color: #FFC499, $amount: 5);
      }
    }
    &__sublabel{
      color: #2D9CDB;
      margin-top: 8px;
    }
  }

  @media (max-width: 992px){
    .Checkout{
      &__step, &__submit{
        width: 100%;
      }
      &__CardInput{
        &_big{
          width: 60%;
        }
        &_small{
          width: 18%;
        }
      }
    }
  }
</style>