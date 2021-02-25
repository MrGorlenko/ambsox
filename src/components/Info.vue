<template>
  <div class="Info d-flex justify-content-between m-0 align-items-center">
    <div class="Info__img col-5 p-0">
      <img :src='Image' alt="">
    </div>
    <div class="Info__content col-6 p-0">
      <h3 class='Info__title'>{{title}}</h3>
      <h4 v-if='subtitle!=""' class='Info__subtitle'>{{subtitle}}</h4>
      <div v-if="SloganBase!='' && SloganBottom!=''" class="Info__slogan">
        <p class='Info__sloganBase'>{{SloganBase}}</p>
        <p class='Info__sloganBottom'>{{SloganBottom}}</p>
      </div>

      <p class='Info__paragraphs' v-for='p in Paragraph' :key='p'>
        {{p}}
      </p>

      <ol class='Info__numberList' v-if='List != ""'>
        <span class='Info__numberListTitle' >{{ListTitle}}</span>
        <li v-for='el in List' :key='el'>
          {{el}}
        </li>
      </ol>

      <ul class='Info__list' v-if='ListTwo != ""'>
        <span class='Info__listTitle'>{{ListTwoTitle}}</span>
        <li v-for='el in ListTwo' :key='el'>
          {{el}}
        </li>
      </ul>

      <div v-if='bottomTextTop!="" && bottomTextBottom!=""' 
      class="Info__bottomTextArray">
        <p class='Info__bottomTextTop' >{{bottomTextTop}}</p>
        <p class='Info__bottomTextBottom' >{{bottomTextBottom}}</p>
      </div>

      <p>{{debug}}</p>

      <p class='Info__bottomText'>{{bottomText}}</p>
      <div class="Info__buttons d-flex justify-contetn-start">
        <a v-for='button in Buttons'
        :key='button'
         >
           <button :class="{'Info__button_filled': button.isFilled==true, 
           'Info__button_white': button.isFilled==false}" class='Info__button'>
             {{button.title}}
           </button>
         </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    'title'            : String,
    'subtitle'         : String,
    'Paragraph'        : Array,
    'bottomText'       : String,
    'Buttons'          : Array,
    'Image'            : String,
    'SloganBase'       : String,
    'SloganBottom'     : String,
    'List'             : Array,
    'ListTitle'        : String,
    'bottomTextTop'    : String,
    'bottomTextBottom' : String,
    'ListTwo'          : Array,
    'ListTwoTitle'     : String,
    'debug'            : String
  },
  data(){
    return{
      first : true
    }
  }
}
</script>

<style lang='scss'>
 .Info{
   height: 100vh;
   &__title, &__subtitle, &__paragraphs, 
   &__bottomText, &__sloganBase, &__sloganBottom,
   &__numberList, &__List, &__bottomTextTop,
   &__bottomTextBottom{
     text-align: start;
   }
   &__title{
     font-size: 56px;
     color: #393939;
   }
   &__subtitle, &__paragraphs{
     font-style: normal;
     font-weight: normal;
   }
   &__subtitle{
     font-size: 28px;
   }
   &__sloganBase, &__sloganBottom, &__bottomTextTop{
     font-size: 14px;
   }
   &__sloganBase{
     color: #FF994F;
     font-style: italic;
     text-transform: uppercase;
     margin-bottom: 0;
   }
   &__sloganBottom{
     font-weight: bold;
     margin-bottom: 0;
   }
   &__paragraphs, &__bottomText{
    font-size: 16px;
   }
   &__paragraphs{
     margin-top: 16px;
     color: #585858;
   }
   &__list{
     list-style-type: '-';
     text-align: start;
     padding-left: 0;

     li{
       margin-top: 35px;
       padding-left: 10px;
     }
   }
   &__listTitle{
     font-weight: bold;
   }
   &__numberList{
     padding-left: 0;
     li{
       margin-left: 18px;
       color: #585858;
     }
   }
   &__numberListTitle{
     color: #FF994F;
   }
   &__bottomTextTop{
     color: #FF994F;
     margin-bottom: 0;
   }
   &__bottomText{
     color: #FFC499;
   }
   &__img{
     img{
       width: 100%;
     }
   }
   &__button{
     padding: 10px 20px;
     border-radius: 44px;
     margin-right: 12px;
     &_white{
      background: none;
      border: 1px solid #FFC499;
     }
     &_filled{
       background: #FFC499;
       border: none;
     }
   }
 }
</style>