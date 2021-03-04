const Interface = {
  state: {
    MainPagehero: require('@/assets/homeHero.png'),
    MainPageHeroMobile: require('@/assets/homeHeroMobile.png'),
    MainPagePic: {
      0: require('@/assets/mainPic1.png'),
      1: require('@/assets/mainPic2.png')
    },
    AboutPage:{
      heroBlockColor: 'linear-gradient(284.02deg, #C3AF8D 21.2%, #E4D8C0 100%)',
      mainPic: require('@/assets/OurSoxHero.png'),
      mainPicMobile: require('@/assets/OurSoxHeroMobile.png')
    },
    OurSoxPagePics:{
      0: require('@/assets/OurSox1.png'),
      1: require('@/assets/OurSox2.png'),
      2: require('@/assets/OurSox3.png'),
      3: require('@/assets/OurSox4.png')
    },
    ModalActive: false,
    ModalGalleryActive: false
  },

  mutations: {
    TRIGGER_MODAL(state){
      state.ModalActive = !state.ModalActive
    },
    TRIIGER_MODAL_GALLERY(state){
      state.ModalGalleryActive = !state.ModalGalleryActive
    }
  }
}

export default Interface