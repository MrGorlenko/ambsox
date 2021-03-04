<template>

  <footer class='Footer
  flex-column
  align-items-center justify-content-center' >
  
  <div>
    <div
    :class="{'d-none': item.isActive==false,
     'd-flex': item.isActive==true}"  
    v-for='item in Base' :key='item' 
    class="">
    <div v-if='item.isActive==true'>
      <p class='Footer__questions'>
         {{item.FooterLabel.label}} 
      <a :href="'mailto:'+Contacts.mail">{{Contacts.mail}}</a> </p>
    </div>
    </div>
    <div class='Footer__icons d-flex
     align-items-center justify-content-between'>
      <a v-for='social in Contacts.social' :key='social' href="">
        <img :src="social.icon" alt="">
      </a>
    </div>
  </div>

   <div class='Footer__subscribe' :class="{'d-none': item.isActive==false}"  
   v-for='item in Base' :key='item' >
     <div class='h-100 d-flex justify-content-center align-items-center flex-column' v-if='item.isActive==true'>
       <p class='Footer__title'>{{item.FooterLabel.Subscribe}}</p>
       <p class='Footer__subtitle'>{{item.FooterLabel.SubscribeBottom}}</p>
       <form class="Footer__form">
         <input class='Footer__input' type="text" placeholder="example@mail.com">
         <button class='Footer__button'>{{item.FooterLabel.button}}</button>
       </form>
     </div>
   </div>

   <div
    :class="{'d-none': item.isActive==false,
     'd-flex': item.isActive==true}"  
    v-for='item in Base' :key='item' 
    class="Footer__bottomLinks justify-content-center">
    <div class='d-flex flex-lg-row flex-column' v-if='item.isActive==true'>
      <a class='Footer__bottomLink' :href='link.url' 
      v-for='link in item.FooterLinks' :key='link'>
        {{link.name}}
      </a>
    </div>
    </div>
  </footer>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Footer',
  computed: {
    ...mapState({
      Base: state => state.Base.BASE,
      Contacts: state => state.Contacts.FooterContacts
    })
    
  }
}
</script>

<style lang='scss' scoped>
  .Footer{
    position: relative;
    height: 100vh;
    &__questions{
      font-size: 28px;
      margin-bottom: 46px;
    }
    &__icons{
      width: 168px;
      margin: auto;
    }
    &__subscribe{
      margin-top: 40px;
      height: 38%;
      width: 73%;
      background-color: #F5F5F5;
    }
    &__title{
      font-weight: bold;
      font-size: 36px;
    }
    &__subtitle{
      font-size: 16px;
    }
    &__input{
      background: #FFFFFF;
      box-shadow: 0px 0px 0px 3px #FDDDC6;
      border-radius: 10px;
      border: none;
      width: 341px;
      height: 56px;
      padding-left: 16px;
    }
    &__button{
      background: #FFC499;
      border-radius: 44px;
      padding: 16px 20px;
      margin-left: 10px;
      border: none;
    }
    &__bottomLinks{
      position: absolute;
      width: 100%;
      bottom: 0;
      padding-bottom: 40px;
    }
    &__bottomLink{
      color: #9F9F9F;
      margin-right: 24px;
      font-size: 18px;
    }
  }

  @media (max-width: 992px){
    .Footer{
      height: initial;
      min-height: initial;
      &__subscribe{
        width: 95%;
        padding: 24px 0px;
      }
      &__questions{
        margin-top: 130px;
        margin-bottom: 30px;
      }
      &__input{
        width: 58%;
      }
      &__button{
        font-size: 14px;
      }
      &__bottomLinks{
        padding-bottom: 0px;
        position: initial;
        padding-bottom: 48px;
      }
      &__bottomLink{
        margin-top: 32px;
        
      }
    }
  }

  @media (max-width : 360px){
    .Footer{
      &__input{
        margin-bottom: 15px;
      }
    }
  }
</style>