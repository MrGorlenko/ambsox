<template>
  <div
   :class="{'nav_off': ModalState == true}"
   id="nav" class='w-100 d-flex justify-content-between'>
    <img src="@/assets/logo.svg" alt="">

    <div class="nav__navbar d-flex justify-content-between align-items-center">
      <div class="nav__pages d-flex justify-content-between align-items-center">
        <router-link
          class='nav__page'
          v-for='(base, page) in navigation' :key='page'
          :to='base.path'>
            <span v-for='el in base.langs' :key='el'>
              <span v-if='el.isActive==true'>
                {{el.name}}
              </span> 
            </span>
        </router-link>
      </div>
      <div 
      class='nav__lang'
      @click='setlanguage(language); setMenyLang(language)' 
      v-for='(item,language) in languages' :key='item'
        :class="{'act': item.isActive == true}">
        {{language}}
      </div>
      <div class="nav__social">
        <a :href="icon.url" v-for='icon in icons' :key='icon'>
          <img :src="icon.icon" alt="">
        </a>
      </div>
      <router-link
      class='nav__basket'
      to='/Basket'>
        <div v-if='SelectedGoods.length>0' class="nav__basketCount">
          {{SelectedGoods.length}}
        </div>
        <img src="@/assets/Basket.svg" alt="">
      </router-link>
    </div>
    
  </div>

  <div class="app">
    <router-view/>
  </div>

  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'
import {mapState, mapMutations} from 'vuex'
export default {
  components:{
    Footer
  },
  computed: {
    ...mapState({
      languages: state => state.Base.BASE,
      navigation : state => state.pages,
      icons: state => state.Contacts.NavContacts,
      shopTitle: state => state.ShopTitle,
      SelectedGoods: state => state.Base.SelectedGoods,
      ModalState: state => state.Interface.ModalActive,
      MainSubtitle: state => state.MainSubtitle,
    })
  },
  methods: {
    ...mapMutations(['SET_LANGUAGE', 'SET_MENU_LANG']),
    setlanguage(index, elem){
      this.SET_LANGUAGE(index)
    },
    setMenyLang(index){
      this.SET_MENU_LANG(index)

      
      let Parcing = (str, destination) => {
        let ShopTitle = document.getElementById(destination);
          ShopTitle.innerHTML = ''
        for (let letter of str){
          let span = document.createElement('span'),
          spanTwo = document.createElement('span');
          span.setAttribute('class', 'upper')
          if (letter == letter.toUpperCase() && letter != '!'){
            span.innerHTML += letter
            ShopTitle.appendChild(span)
          }
          else {
            spanTwo.innerHTML += letter
            ShopTitle.appendChild(spanTwo)
          }
        }
      };

      for (let [key, obj] of Object.entries(this.shopTitle)){
        if (obj.isActive == true){
          if (document.body.contains(document.getElementById('ShopTitle'))) {
            Parcing(obj.name, 'ShopTitle')
            }
          }
        }

      for (let [key, obj] of Object.entries(this.MainSubtitle)){
        if (obj.isActive == true){
            console.log(obj.name)
            Parcing(obj.name, 'homeSubtitle')
          }
        }

    }
  },
  
}
</script>

<style lang="scss">

@import '@/vendor/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.act{
  color: #FFC499;
}
#app {
  font-family: Roboto;
  -webkit-font-smoothing: Roboto;
  -moz-osx-font-smoothing: Roboto;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 0.02em;
}

#nav {
  padding: 22px 20px;
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  z-index: 4;
}

.nav__pages{
  a {
    font-weight: normal;
    color: #393939;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 44px;
    &:hover{
      text-decoration: none;
      background: #FFC499;
      color: #FFFFFF;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &.router-link-exact-active {
      background: #FFC499;
      color: #FFFFFF;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}

.nav_off{
  z-index: 1 !important;
}

.nav{
  &__navbar{
    width: 75%;
    height: 44px;
  }
  &__pages{
    width: 58%;
  }
  &__page{
    font-weight: 300;
    color: #393939;
    padding: 10px 3%;
    transition: .1s ease;
    margin-right: 2%;
    span{
      min-width: 50px;
      display: block;
    }
  }
  &__page, &__lang{
    font-size: 18px;
    line-height: 24px;
  }
  &__social{
    a{
      margin-right: 10px;
    }
  }
  &__lang{
    cursor: pointer;
  }
  &__basket{
    position: relative;
  }
  &__basketCount{
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #FF4F4F;
    width: 16px;
    height: 16px;
    border-radius: 100px;
    font-size: 12px;
    color: #fff;
  }
}

.app{
  padding-top: $mainPaddingTop;
}

@media (max-width: 1100px){
  .nav{
    &__navbar{
      width: 75%;
    }
  }
}
</style>
