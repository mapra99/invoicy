// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string,
    text: {
      primary: string,
      secondary: string,
      tertiary: string,
      danger: string
    },
    buttons: {
      secondary: {
        bg: string,
        bgHover: string,
        text: string
      },
      tertiary: {
        bg: string,
        bgHover: string,
        text: string
      },
      checkbox: {
        primary: string,
        secondary: string,
      }
    },
    forms: {
      label: string,
      input: {
        bg: string,
        border: string,
        borderFocus: string,
        text: string,
        textSecondary: string,
        placeholder: string,
        icons: string
      }
    },
    layout: {
      bg: string,
      bgSecondary: string,
      navbar: string,
      buttons: string
    },
    invoices: {
      status: {
        paid: string,
        pending: string,
        draft: string
      },
      newInvoice: {
        bg: string,
        totalPrice: string
      },
      itemsList: {
        bgPrimary: string,
        bgSecondary: string,
        neutralText: string
      }
    }
  }
}
