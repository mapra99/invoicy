import { COLORS } from '../constants';

const {
  SPACE_CADET_BLUE,
  WHITE,
  LAVENDER_WEB,
  SPACE_CADET_GREY,
  SPACE_CADET,
  MEDIUM_SLATE_BLUE,
  MEDIUM_PURPLE,
  GLAUCOUS,
  XIKETIC,
  CARIBEAN_GREEN,
  DARK_ORANGE
} = COLORS

export default {
  name: "dark",
  text: {
    primary: WHITE,
    secondary: MEDIUM_SLATE_BLUE,
    tertiary: LAVENDER_WEB
  },
  buttons: {
    secondary: {
      bg: SPACE_CADET_BLUE,
      bgHover: WHITE,
      text: LAVENDER_WEB
    },
    tertiary: {
      bg: SPACE_CADET_GREY,
      bgHover: SPACE_CADET,
      text: LAVENDER_WEB
    }
  },
  forms: {
    label: LAVENDER_WEB,
    input: {
      bg: SPACE_CADET,
      border: SPACE_CADET_BLUE,
      borderFocus: SPACE_CADET_BLUE,
      text: WHITE,
      textSecondary: MEDIUM_PURPLE,
      placeholder: GLAUCOUS,
      icons: GLAUCOUS
    }
  },
  layout: {
    bg: XIKETIC,
    bgSecondary: SPACE_CADET,
    navbar: SPACE_CADET_GREY,
    buttons: GLAUCOUS
  },
  invoices: {
    status: {
      paid: CARIBEAN_GREEN,
      pending: DARK_ORANGE,
      draft: LAVENDER_WEB
    },
    newInvoice: {
      bg: XIKETIC
    }
  }
}
