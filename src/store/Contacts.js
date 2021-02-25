const Contacts = {
  state: {
    NavContacts: [
      { 
        title: 'insta',
        icon: require('@/assets/Insta-navbar.svg'),
        url: '#'
      },
      { 
        title: 'mail',
        icon: require('@/assets/mail-navbar.svg'),
        url: '#'
      },
      { 
        title: 'facebook',
        icon: require('@/assets/facebook-navbar.svg'),
        url: '#'
      }
    ],
    FooterContacts: {
      mail: 'info@ambsox.com',
      social: {
        'insta': {
          icon: require('@/assets/FooterInsta.svg'),
          url: '#'
        },
        'mail' : {
          icon: require('@/assets/FooterMail.svg'),
          url: '#'
        },
        'facebook': {
          icon: require('@/assets/FooterFacebook.svg'),
          url: '#'
        }
      }
    }
  }
}

export default Contacts