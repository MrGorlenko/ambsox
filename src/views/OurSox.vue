<template>
    <div :style='"background: url(" + ourSoxInterface.mainPic + ")"' 
     class='OurSox__hero d-flex flex-lg-row flex-column'>
      <div 
      :class="{'d-none':block.isActive==false,
      'd-flex':block.isActive==true}"
      class='col-lg-7 col-12 flex-column OurSox__heroContent 
       justify-content-lg-center
       align-items-lg-center'
      v-for='block in homeBlock' :key='block'
      >
      <h2 class='OurSox__title'>{{block.aboutTitle}}</h2>
      
      <div class='OurSox__subtitleWrapper' v-if='block.isActive==true'>
        <p class='OurSox__subtitle' v-for='p in block.aboutSlogan' :key='p'>
          {{p}}
        </p>
      </div>
      </div>
      <div class='col-lg-5 col-12 OurSox__mainPic p-0'>
        <img class='d-lg-none' :src="ourSoxInterface.mainPicMobile" alt="">
      </div>
    </div>

    <div class='OurSox__container' v-for='(elem, index) in homeBlock' :key='index'>
      <div v-if='elem.isActive==true'>
        <info
        v-for='(item, index) in elem.OurSoxContent'
        :key='item'
        :class="{'flex-lg-row-reverse': index % 2 == 1 , 'flex-lg-row': index % 2 != 1 }"
        :title='item.title'
        :Image='mainPics[index]'
        :SloganBase='item.slogan.base'
        :SloganBottom='item.slogan.bottom'
        :Paragraph='item.base.paragraphs'
        :ListTitle='item.base.list.title'
        :List='item.base.list.body'
        :bottomTextTop='item.bottom.top'
        :bottomTextBottom='item.bottom.bottom'
        :ListTwoTitle='item.base.listTwo.title'
        :ListTwo='item.base.listTwo.base'
        >
        </info>
      </div>
    </div>
</template>

<script>
import Info from '@/components/Info.vue'
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'OurSox',
  components: {
    Info
  },
  computed: {
    ...mapState({
      homeBlock: state => state.Base.BASE,
      ourSoxInterface: state => state.Interface.AboutPage,
      mainPics: state => state.Interface.OurSoxPagePics,
    })
  }
}
</script>

<style lang='scss' scoped>
  @import '@/vendor/style.scss';
  .OurSox{
    &__hero{
      min-height: 100vh;
      margin-top: -$mainPaddingTop;
      background-size: cover !important;
    }
    &__container{
      width: 73%;
      margin: auto;
    }
    &__title, &__subtitle{
      font-size: 53px;
      text-align: start;
      
    }
    &__title{
      color: #393939;
      line-height: 120%;
    }
    &__subtitle{
      color: #FFFFFF;
      margin-bottom: 0;
      line-height: 120%;
    }
    &__subtitleWrapper, &__title{
      width: 80%;
    }
    &__heroContent{
      height: 100vh;
      padding-left: 16px;
      padding:0;
    }
    &__mainPic{
      min-height: 100vh;
      img{
        object-fit: cover;
        width: 100%;
      }
    }
  }

  @media (max-width: 992px){
    .OurSox{
      &__container{
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
      }
      &__hero{
        min-height: initial;
        padding-top: 145px;
      }
      &__title , &__subtitle{
        font-size: 32px;
        width: 100%;
      }
      &__subtitle{
        color: #FF994F;
      }
      &__heroContent{
        height: initial;
        padding-left: 16px;
      }
      &__mainPic{
        min-height: initial;
      }
    }
  }
</style>