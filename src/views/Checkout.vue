<template>
  <div class="Checkout">
    <div class="container d-flex">
      <div class="col-6">
        <div v-if='firstStep==false' class="Checkout__step">
          <p>1. Your Email</p>
          <input v-model='email' type="text">
          <button @click='confirmEmail(email)'>Continue</button>
          <p>{{errorMail}}</p>
        </div>

        <div v-else class="Checkout__step">
          <button @click='editEmail'>edit</button>
          <p>1. Your Email is {{email}}</p>
        </div>

        <div v-if='firstStep==true && secondStep == false' class="Checkout__step">
          <p>2. Shipping</p>
          <input type="text" placeholder="first name"
          v-model='firstName'>
          <input type="text" placeholder='last name'
          v-model='secondName'>
          <input type="text" placeholder="address 1"
          v-model='address1'>
          <input type="text" placeholder="address 2"
          v-model='address2'>
          <form action="">
            <select autocomplete="off" id='checkoutId' v-for='option in CheckOut'
            :key='option'>
            <option
            :selected="index==0 ? true : false"
             v-for='(opt, index) in option.contries'
             v-bind:value="opt"
             :key='opt'>
              {{opt}}
            </option>  
          </select>
          </form>

          <div>
            <input type="text" placeholder="postal code"
            v-model='postalCode'>
            <input type="text" placeholder="city"
            v-model='city'>
            <input type="text" placeholder="state"
            v-model="state">
          </div>
          <button @click='confirmShipping'>Continue</button>
        </div>

        <div v-else
        class="Checkout__step">
          <button @click='editShipping'
           v-if='secondStep==true && firstStep==true'>
            edit
          </button>
          <p>2. Shipping</p>
          {{firstName}}
          {{secondName}}
          {{address1}}
          {{address2}}
          <div>
            {{postalCode}}

            {{city}} 

            {{state}}
          </div>
          {{country}}
        </div>


        <div class='Checkout__step' v-if='firstStep==true && secondStep == true && thirdStep==false'>
          <p>3. Payment and discount</p>
          <div class='payment d-flex'>
            <input v-model='CardNumber'
             class='col-7' placeholder='Card number' type="text">
            <input v-model='MM_YY'
             class='col-2' placeholder='MM/YY' type="text">
            <input v-model='CVC'
             class='col-2' placeholder="CVC" type="text">
          </div>

          <div>
            <input v-model='discountCode'
             type="text" placeholder='discount Code'>
          </div>

          <button @click='confirmPayment'> Continue</button>
        </div>

        <div class='Checkout__step' v-else>
          <p>3. Payment and discount</p>
          Your card is {{CardNumber}}
        </div>

        <div v-if='firstStep==true && secondStep==true && thirdStep==true' class="Checkout__step">
          <p>4. Review and purchase</p>
          <p>Yay! letter we'll deliver</p>
        </div>

        <div v-else class='Checkout__step'>
          <p>4. Review and purchase</p>
        </div>
      </div>
      <div class="col-6"> 
        <h3>Order summary</h3>
        <div class="Checkout__item d-flex align-items-center" v-for='(good, index) in Goods' :key='good'>
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
          <div class="col-3 pr-0 d-flex flex-column align-items-center justify-content-between">

            <div>
              <p>CHF {{good.price}}</p>
            </div>
            
             <span @click='removeGood(index); removeGoodPrice(good)'>Remove</span>
          </div>
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
    confirmEmail(email){
      // if (this.validEmail(email)){
        this.firstStep = true
        this.errorMail = ''
        // }
      // else {
        // this.errorMail = 'please enter the correct email'
        // }
        this.country = 'Switzerland'
    },
    editEmail(){
      this.firstStep = false
    },
    validEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    },

    confirmShipping(){
      this.secondStep = true
    },
    editShipping(){
      this.secondStep = false
    },
    validCardNumber: function(card) {

    },

    confirmPayment(){
      this.thirdStep = true
    }
  },
  data(){
    return {
      email: '',
      errorMail: '',
      firstStep: false,

      firstName: '',
      secondName: '',
      address1: '',
      address2: '',
      country: '',
      postalCode: '',
      city: '',
      state: '',
      secondStep: false,

      cardNumber: '',
      MM_YY: '',
      CVC: '',
      discountCode: '',
      thirdStep: false

    }
  }
}
</script>

<style lang='scss'>

.Checkout{
  &__step{
    border: 1px solid black;
    margin-bottom: 22px;
  }
}

.payment{
  input:first-child{
    border-left: initial;
    border-right: none;
  }
  input:last-child{
    border-left: none;
    border-right: initial;
  }
  input:nth-child(2){
    border-left: none;
    border-right: none;
  }
}

</style>