import { COLORS } from '../constants';

const {
  SPACE_CADET_BLUE,
  WHITE,
  LAVENDER_WEB,
  SPACE_CADET_GREY,
  SPACE_CADET
} = COLORS

export default {
  id: "dark-v0.0.1", // Update this value every time the theme is updated
  name: "Dark",
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
  }
}
