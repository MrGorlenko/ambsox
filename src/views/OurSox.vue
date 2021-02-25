<template>
    <div :style='"background: url(" + ourSoxInterface.mainPic + ")"' 
     class='OurSox__hero d-flex'>
      <div 
      :class="{'d-none':block.isActive==false,
      'd-flex':block.isActive==true}"
      class='col-7 flex-column OurSox__heroContent 
       justify-content-center
       align-items-center col-5 p-0'
      v-for='block in homeBlock' :key='block'
      >
      <h2 class='OurSox__title'>{{block.aboutTitle}}</h2>
      
      <div class='OurSox__subtitleWrapper' v-if='block.isActive==true'>
        <p class='OurSox__subtitle' v-for='p in block.aboutSlogan' :key='p'>
          {{p}}
        </p>
      </div>
      </div>
      <div class='col-5 OurSox__mainPic'>
      </div>
    </div>

    <div class='OurSox__container' v-for='(elem, index) in homeBlock' :key='index'>
      <div v-if='elem.isActive==true'>
        <info
        v-for='(item, index) in elem.OurSoxContent'
        :key='item'
        :class="{'flex-row-reverse': index % 2 == 1  }"
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
    }
    &__mainPic{
      min-height: 100vh;
      img{
        object-fit: cover;
        width: 100%;
      }
    }
  }
</style>