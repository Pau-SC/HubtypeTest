import gotLogo from '../assets/got-Logo.png'
import gotLauncher from '../assets/got-Launcher.png'

export const webchat = {
  theme: {
      style:{
        backgroundColor: 'grey',
      },
      userMessageStyle: {
          backgroundColor: '#404040',
          borderRadius: '65px',
      },
      userInput: {
          style: {
            background: '#000000',
          },
          box: {
            style: {
              border: '2px solid #ABABAB',
              color: '#ABABAB',
              align: 'center',
              wrap: 'nowrap',
            },
          }

      },
      triggerButton:{
          style:{
            backgroundColor: '#000000',
          },
          image: gotLauncher,
      },
      brand: {
          image: gotLogo,
        },
      header: {
        title: 'Winter is coming...',
        subtitle: 'GOT',
        image: gotLogo,
        style: {
          height: 40,
          background: 'linear-gradient(to left, #ABABAB,#000000  65%)',
        },
      intro: {
          image: gotLauncher,
        },
      },
  },
}