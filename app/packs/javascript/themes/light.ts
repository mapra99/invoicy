import { COLORS } from '../constants';

const {
  GHOST_WHITE,
  LAVENDER_WEB,
  GLAUCOUS,
  SPACE_CADET_GREY,
  RICH_BLACK,
  COOL_GREY,
  MEDIUM_SLATE_BLUE,
  MEDIUM_PURPLE,
  WHITE,
  CULTURED,
  CARIBEAN_GREEN,
  DARK_ORANGE,
  RED_SALSA,
} = COLORS;

export default {
  name: 'light',
  text: {
    primary: RICH_BLACK,
    secondary: MEDIUM_SLATE_BLUE,
    tertiary: GLAUCOUS,
    danger: RED_SALSA,
  },
  buttons: {
    secondary: {
      bg: GHOST_WHITE,
      bgHover: LAVENDER_WEB,
      text: GLAUCOUS,
    },
    tertiary: {
      bg: SPACE_CADET_GREY,
      bgHover: RICH_BLACK,
      text: COOL_GREY,
    },
  },
  forms: {
    label: GLAUCOUS,
    input: {
      bg: WHITE,
      border: LAVENDER_WEB,
      borderFocus: MEDIUM_PURPLE,
      text: RICH_BLACK,
      textSecondary: MEDIUM_SLATE_BLUE,
      placeholder: GLAUCOUS,
      icons: GLAUCOUS,
    },
  },
  layout: {
    bg: CULTURED,
    bgSecondary: WHITE,
    navbar: SPACE_CADET_GREY,
    buttons: GLAUCOUS,
  },
  invoices: {
    status: {
      paid: CARIBEAN_GREEN,
      pending: DARK_ORANGE,
      draft: SPACE_CADET_GREY,
    },
    newInvoice: {
      bg: WHITE,
      totalPrice: COOL_GREY,
    },
    itemsList: {
      bgPrimary: GHOST_WHITE,
      bgSecondary: SPACE_CADET_GREY,
      neutralText: WHITE,
    },
  },
};
