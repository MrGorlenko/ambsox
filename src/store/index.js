import { createStore } from 'vuex'
import Base from '@/store/Base.js'
import Contacts from '@/store/Contacts.js'
import Interface from '@/store/Interface'

export default createStore({
  state: {
    MainSubtitle: {
      'Ru': {
        name: 'идеальные ШВЕЙЦАРСКИЕ носки для вашего любимого вида спорта!',
        isActive: true
      },
      'Eng': {
        name:'(на aнгл) идеальные ШВЕЙЦАРСКИЕ носки для вашего любимого вида спорта!',
        isActive: false
      },
      'Fr': {
        name: '(на французском) идеальные ШВЕЙЦАРСКИЕ носки для вашего любимого вида спорта!',
        isActive: false
      }
    },
    pages: {
      'Home': {
        langs: {
          'Ru': {
            isActive: true,
            name: 'Главная'
          },
          'Eng': {
            isActive: false,
            name: 'Home'
          },
          "Fr": {
            isActive: false,
            name: '(Fr) Home'
          }
        },
        path: '/'
      },
      'OurSox' : {
        langs: {
          'Ru': {
            isActive: true,
            name: 'О нас'
          },
          'Eng': {
            isActive: false,
            name: 'OurSox'
          },
          "Fr": {
            isActive: false,
            name: '(Fr) OurSox'
          }
        },
        path: '/ourSox'
      },
      'Shop' : {
        langs: {
          'Ru': {
            isActive: true,
            name: 'Магазин'
          },
          'Eng': {
            isActive: false,
            name: 'Shop'
          },
          "Fr": {
            isActive: false,
            name: '(Fr) Shop'
          }
        },
        path: '/shop'
      },
      'Gallery': {
        langs: {
          'Ru': {
            isActive: true,
            name: 'Галерея'
          },
          'Eng': {
            isActive: false,
            name: 'Gallery'
          },
          "Fr": {
            isActive: false,
            name: '(Fr) Gallery'
          }
        },
        path: '/gallery'
      },
      'Sale%': {
        langs: {
          'Ru': {
            isActive: true,
            name: 'Скидки%'
          },
          'Eng': {
            isActive: false,
            name: 'Sale'
          },
          "Fr": {
            isActive: false,
            name: '(Fr) Sale'
          }
        },
        path: '/sale'
      }
    },
    allCats: {
      'Ru': {
        name: 'Все',
        isActive: true
      },
      'Eng': {
        name: 'All',
        isActive: false
      },
      'Fr': {
        name: '(Fr) All',
        isActive: false
      }
    },
    ButtonShop: {
      'Ru': {
        name: 'Посмотреть',
        isActive: true
      },
      'Eng': {
        name: 'Quick view',
        isActive: false
      },
      'Fr': {
        name: '(Fr) Quick view',
        isActive: false
      }
    },
    ShopTitle: {
      'Ru': {
        name: 'спортивные носки для вас ПИЛАТЕС, БАРРЕ, ТРКС и ЙОГА УРОКИ',
        isActive: true
      },
      'Eng': {
        name: 'sport antislippery socks - for your PILATES, BARRE, TRX and YOGA CLASSES',
        isActive: false
      },
      'Fr': {
        name: '(fr)sport antislippery socks - for your PILATES, BARRE, TRX and YOGA CLASSES',
        isActive: false
      }
    },
    ModalLabelColor: {
      'Ru': {
        name: 'Выберите цвет',
        isActive: true
      },
      'Eng': {
        name: 'Select color',
        isActive: false
      },
      'Fr': {
        name: '(fr)Select color',
        isActive: false
      }
    },
    ModalLabelSize: {
      'Ru': {
        name: 'Выберите размер',
        isActive: true
      },
      'Eng': {
        name: 'Select size',
        isActive: false
      },
      'Fr': {
        name: '(fr)Select size',
        isActive: false
      }
    },
    ModalButton: {
      'Ru': {
        name: 'Добавить в корзину',
        isActive: true
      },
      'Eng': {
        name: 'Add to card',
        isActive: false
      },
      'Fr': {
        name: '(fr)Add to card',
        isActive: false
      }
    },
    GalleryTitle: {
      'Ru': {
        name: 'Галерея',
        isActive: true
      },
      'Eng': {
        name: 'Gallery',
        isActive: false
      },
      'Fr': {
        name: '(fr) Gallery',
        isActive: false
      }
    },
    InitialSlideGallery: 0,
    BasketTitle: {
      'Ru': {
        name: 'Корзина',
        isActive: true
      },
      'Eng': {
        name: 'Card',
        isActive: false
      },
      'Fr': {
        name: '(fr) Card',
        isActive: false
      }
    },
    BasketSum: {
      'Ru': {
        name: 'Сумма заказа',
        isActive: true
      },
      'Eng': {
        name: 'Your Order',
        isActive: false
      },
      'Fr': {
        name: '(fr) Your Order',
        isActive: false
      }
    },
    BasketPay: {
      'Ru': {
        name: 'К оплате',
        isActive: true
      },
      'Eng': {
        name: 'To pay',
        isActive: false
      },
      'Fr': {
        name: '(fr) To pay',
        isActive: false
      }
    },
    BasketButton: {
      'Ru': {
        name: 'Купить',
        isActive: true
      },
      'Eng': {
        name: 'Buy',
        isActive: false
      },
      'Fr': {
        name: '(fr) Buy',
        isActive: false
      }
    },
    BasketColorSize: {
      'Ru': {
        color: 'Цвет',
        size: 'Размер',
        isActive: true
      },
      'Eng': {
        color: 'Color',
        size: 'Size',
        isActive: false
      },
      'Fr': {
        color: '(Fr) Color',
        size: '(Fr) Size',
        isActive: false
      }
    },
    CheckOut: {
      'Eng': {
        contries: [
          'Switzerland'
        ]
      }
    }
  },
  mutations: {
    SET_MENU_LANG(state, index){
      for (let [keyFor,value] of Object.entries(state.pages)){
        for (let [key, val] of Object.entries(value.langs)){
          val.isActive = false
        }
        value.langs[index].isActive = true
      }

      let switchLanguageSingle = (dict) => {
        for (let [key, value] of Object.entries(dict)) {
          value.isActive = false
        }
        dict[index].isActive = true
      }

      switchLanguageSingle(state.allCats)
      switchLanguageSingle(state.ButtonShop)
      switchLanguageSingle(state.ShopTitle)
      switchLanguageSingle(state.ModalLabelColor)
      switchLanguageSingle(state.ModalLabelSize)
      switchLanguageSingle(state.ModalButton)
      switchLanguageSingle(state.GalleryTitle)
      switchLanguageSingle(state.BasketTitle)
      switchLanguageSingle(state.BasketSum)
      switchLanguageSingle(state.BasketPay)
      switchLanguageSingle(state.BasketButton)
      switchLanguageSingle(state.BasketColorSize)
      switchLanguageSingle(state.MainSubtitle)
    },

    SET_INITIAL_SLIDE(state, index){
      state.InitialSlideGallery = index
    }
  },
  actions: {
  },
  modules: {
    Base,
    Contacts,
    Interface
  }
})
