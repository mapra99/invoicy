import { COLORS } from '../constants';

const {
  SPACE_CADET_BLUE,
  WHITE,
  LAVENDER_WEB,
  SPACE_CADET_GREY,
  SPACE_CADET,
  MEDIUM_SLATE_BLUE,
  MEDIUM_PURPLE,
  GLAUCOUS
} = COLORS

export default {
  id: "dark-v0.0.1", // Update this value every time the theme is updated
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
  }
}
