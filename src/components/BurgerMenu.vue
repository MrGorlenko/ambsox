<template>
  <div class="burger d-flex flex-column justify-content-between">
    <div class='d-flex justify-content-between'>
      <div class='burger__langs d-flex'>
        <div 
        class='burger__lang'
        @click='setlanguage(language); setMenyLang(language)' 
        v-for='(item,language) in languages' :key='item'
          :class="{'act': item.isActive == true}">
          {{language}}
        </div>
      </div>
      <img @click='toggleBurger()' src="@/assets/burgerClose.svg" alt="">
    </div>

    <div @click='toggleBurger()' class='d-flex flex-column align-items-center'>
      <router-link
        
        class='burger__link d-flex align-items-center justify-content-center'
        v-for='(base, page) in navigation' :key='page'
        :to='base.path'>
          <span v-for='el in base.langs' :key='el'>
            <span v-if='el.isActive==true'>
              {{el.name}}
            </span> 
          </span>
        </router-link>
    </div>

    <div class="burger__social">

    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'burger',
  props: {
    languages: Object,
    navigation: Object
  },
  computed: {
    ...mapState({
      shopTitle: state => state.ShopTitle,
      MainSubtitle: state => state.MainSubtitle,  
    })
  },
  methods: {
    ...mapMutations(['SET_LANGUAGE', 'SET_MENU_LANG','TOGGLE_BURGER']),
    toggleBurger(){
      this.TOGGLE_BURGER()
    },
    setlanguage(index){
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
          if (document.body.contains(document.getElementById('homeSubtitle'))) {
            Parcing(obj.name, 'homeSubtitle')
            }   
          }
        }

    },
  }
  
}
</script>

<style lang='scss' >
  .burger{
    &_active{
      left: 0;
    }
    &_passive{
      left: -150%;
    }
    transition: .2s ease;
    top: 0;
    z-index: 15;
    background: #EBEDEE;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding: 32px 20px;
    &__lang{
      font-size: 18px;
      margin-right: 18px;
    }
    &__link{
      background: #FFFFFF;
      border-radius: 44px;
      width: 162px;
      height: 52px;
      margin-bottom: 24px;
      color: #393939;
      &:hover{
        color: #393939;
        text-decoration: none;
      }
    }
    .router-link-active{
      background: #FFC499;
    }
  }
</style>