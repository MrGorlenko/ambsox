<template>
  <div class="home">
    <div
     :style=" 'background: url(' + mainPageHero + ')' "
     class="home__hero d-flex justify-content-end row w-100 m-0">
      <div
       class='d-flex align-items-lg-center align-items-start col-12  col-lg-5 p-lg-0 
        flex-column 
       justify-content-center align-items-center'
      >
      <div :class="{'d-none':block.isActive==false,
        'd-flex':block.isActive==true}"
        v-for='block in homeBlock' :key='block'>
        <div  v-if='block.isActive==true'>
          <h1 class='home__title'>{{block.MainSlogan}}</h1>
        </div>
      </div>
          <h3 v-for='subTitle in MainSubtitle' :key='subTitle'
           class='home__subtitle'>
            <p id='homeSubtitle'></p>
          </h3>
      </div>

      <div class="home__img col-lg-6 col-12 p-0 h-100">
        <img class='w-100' :src="MainPageHeroMobile" alt="">
      </div>
    </div>

    <div class="container">
     <div v-for='(elem, index) in homeBlock'
     :key='index'>
      <div v-if='elem.isActive==true'>
        <info
          v-for='(item, index) in elem.HomePageContent'
          :class="{'flex-lg-row-reverse': index % 2 == 1  }"
          :Image='mainPics[index]'
          :key='index'
          :title='item.title'
          :subtitle='item.subtitle'
          :Paragraph='item.paragraphs'
          :bottomText='item.bottomText'
          :Buttons='item.buttons'
        >  </info>
      </div>
     </div>
    </div>
   
   <div class="home__carusel d-flex flex-column justify-content-center">
      <div class="home__caruselTitle"
       v-for='item in homeBlock'
      :key='item'
      :class="{'d-none': item.isActive==false}">
        <div v-if='item.isActive==true'>
        <CaruselTitle
        :title1 = item.CaruselLabel.basic
        :title2 = item.CaruselLabel.middle
        :title3 = item.CaruselLabel.end
        />
        </div>
      </div>

      <Carusel
      v-if='this.showCarusel==true'
      :goods='HotGoods'
      />


   </div>
    
     
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState, mapMutations, mapActions} from 'vuex'
import Info from '@/components/Info.vue'
import CaruselTitle from '@/components/CaruselTitle.vue'
import Carusel from '@/components/Carusel.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Info,
    Carusel,
    CaruselTitle,
  },
  computed: {
    ...mapState({
      MainSubtitle: state => state.MainSubtitle,
      mainPageHero: state => state.Interface.MainPagehero,
      MainPageHeroMobile: state => state.Interface.MainPageHeroMobile,
      homeBlock: state => state.Base.BASE,
      Goods: state => state.Base.GOODS,
      mainPics: state => state.Interface.MainPagePic,
      HotGoods: state => state.Base.HotGoods

    })
  },
  mounted(){ 
    let Parcing = (str, destination) => {
      let ShopTitle = document.getElementById(destination);
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
    }

    for (let [key, obj] of Object.entries(this. MainSubtitle)){
      if (obj.isActive == true){
        Parcing(obj.name, 'homeSubtitle')
      }
    }

    // ParcingHome('homeSubtitle', 'homeSubtitleSpan')
  },
  methods: {
  },
  data(){
    return{
      showCarusel: true
    }
  }
}
</script>

<style lang="scss">
$bg-blur:linear-gradient(360deg, rgba(0, 0, 0, 0) 80%, rgba(255,255,255,.5) 100%);
@import '@/vendor/style.scss';
 .home{
   margin-top: - $mainPaddingTop;
   min-height: 100vh;
   width: 100%;
   position: relative;
   z-index: 2;
  
   &__hero{
    height: 100vh;
    width: 100%;
    background-size: cover !important;
    position: relative;
     &::after{
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 40%;
       display: block;
       content: '';
       background: $bg-blur;
       border-radius: 0px;
       z-index: 0;
     }
   }
   &__title, &__subtitle{
     text-align: start;
     width: 100%;
     z-index: 6;
   }
   &__title{
     font-size: 56px;
     color: #393939;
   }
   &__subtitle{
     font-size: 28px;
     font-style: normal;
     font-weight: normal;
      span:first-child{
        text-transform: uppercase;
      }
      .upper{
       color:#FFC499;
      }
   }
   &__img{
     position: relative;
     img{
       width: 100%;
       height: 100%;
       object-fit: cover;
     }
   }
   &__caruselTitle{
     margin-bottom: 12%;
   }
   &__carusel{
     height: 100vh;
   }
 }

 @media (max-width: 992px){
   $bg-blur:linear-gradient(360deg, rgba(0, 0, 0, 0) 40%, rgba(235,237,238,1) 100%);
   .home{
     &__hero{
       padding-top: $mobilePaddingTop;
       min-height: 100vh;
       height: initial;
     }
     &__title{
       font-size: 32px;
       margin-bottom: 16px;
     }
     &__subtitle{
       font-size: 19px;
     }
     &__img{
       position: relative;
       &::after{
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 40%;
         display: block;
         background: $bg-blur;
         content: '';
       }
     }
     &__carusel{
       height: initial;
       padding-top: 140px;
     }
   }
 }


</style>
