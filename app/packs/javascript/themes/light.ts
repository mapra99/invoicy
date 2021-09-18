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
  CULTURED
} = COLORS

export default {
  name: "light",
  text: {
    primary: RICH_BLACK,
    secondary: MEDIUM_SLATE_BLUE,
    tertiary: GLAUCOUS
  },
  buttons: {
    secondary: {
      bg: GHOST_WHITE,
      bgHover: LAVENDER_WEB,
      text: GLAUCOUS
    },
    tertiary: {
      bg: SPACE_CADET_GREY,
      bgHover: RICH_BLACK,
      text: COOL_GREY
    }
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
      icons: GLAUCOUS
    }
  },
  layout: {
    bg: CULTURED,
    bgSecondary: WHITE,
    navbar: SPACE_CADET_GREY,
    buttons: GLAUCOUS
  }
}
