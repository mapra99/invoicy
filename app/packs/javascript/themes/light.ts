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
  WHITE
} = COLORS

export default {
  id: "light-v0.0.1", // Update this value every time the theme is updated
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
  }
}