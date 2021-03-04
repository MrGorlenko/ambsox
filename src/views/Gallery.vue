<template>
  <div class="Gallery">
    <h2 class='Gallery__title'>
      <span v-for='title in GalleryTitle'
      :key='title'>
        <span v-if='title.isActive == true'>
          {{title.name}}
        </span>
      </span>
    </h2>

    <div class="Gallery__container d-flex flex-wrap">
      <div
       @click='openModal();setInitialSlide(n)'
       class='Gallery__item' v-for='n in 20' :key=n>
        <img class='w-100'
          src="https://images.squarespace-cdn.com/content/5a265c07e9bfdf7a6ed25906/1521663213784-8YM3DS9OT2SU9GWR1ZQB/AMBsox_classicGrip_Black.jpg?content-type=image%2Fjpeg" alt="">
      </div>
    </div>
  </div>

  <ModalGallery
  v-if='ModalGallery==true'
  />
</template>

<script>
import ModalGallery from '@/components/ModalGallery'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Gallery',
  computed: {
    ...mapState({
      GalleryTitle: state => state.GalleryTitle,
      ModalGallery: state => state.Interface.ModalGalleryActive
    })
  },
  components: {
    ModalGallery
  },
  methods: {
    ...mapMutations(['TRIIGER_MODAL_GALLERY', 'SET_INITIAL_SLIDE']),
    openModal(){
      this.TRIIGER_MODAL_GALLERY()
    },
    setInitialSlide(index){
      this.SET_INITIAL_SLIDE(index)
    }
  }
}
</script>

<style lang='scss'>
  .Gallery{
    &__container{
      width: 73%;
      margin: auto;
    }
    &__item{
      max-height: 230px;
      margin-bottom: 20px;
      width: 23.5%;
      margin-right: 2%;
      cursor: pointer;
      transition: .3s ease;
      &:hover{
        opacity: .7;
        transition: .3s ease;
      }
      img{
        height: 100%;
        object-fit: cover;
      }
      &:nth-child(6n), &:nth-child(6n+1), &:first-child, &:nth-child(7){
        width: 49%;
      }
      &:nth-child(3n){
        margin-right: 0;
      }

    }
  }

  @media (max-width: 992px){
    .Gallery{
      &__title{
        margin-bottom: 20px;
        text-align: start;
        width: 95%;
        padding-left: 2.5%;
      }
      &__container{
        width: 95%;
      }
      &__item{
        width: 100%;
        &:nth-child(6n), &:nth-child(6n+1), &:first-child, &:nth-child(7){
          width: 100%;
        }
        margin-bottom: 10px;
      }
    }
  }

</style>