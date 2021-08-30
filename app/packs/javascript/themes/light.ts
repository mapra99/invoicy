import { COLORS } from '../constants';

const {
  GHOST_WHITE,
  LAVENDER_WEB,
  GLAUCOUS,
  SPACE_CADET_GREY,
  RICH_BLACK,
  COOL_GREY
} = COLORS

export default {
  id: "light-v0.0.1", // Update this value every time the theme is updated
  name: "Light",
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
  }
}
