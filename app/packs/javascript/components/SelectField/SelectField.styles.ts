// This module isn't using styled components. It contains a set of
// override styles for the react-select Select component, which uses emotion.js

import { COLORS, FONTS } from '../../constants'

const { MEDIUM_SLATE_BLUE, LAVENDER_WEB, MEDIUM_PURPLE, RICH_BLACK, GLAUCOUS, CULTURED } = COLORS
const { SPARTAN } = FONTS

export const selectStyles = {
  valueContainer: (provided, _state) => ({
    ...provided,
    height: "48px",
    padding: "0 20px"
  }),
  container: (provided, _state) => ({
    ...provided,
    color: RICH_BLACK,
    fontFamily: SPARTAN,
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: 1.25
  }),
  control: (provided, state) => {
    const baseStyles = {
      ...provided,
      transition: "border-color 0.2s",
      border: `1px solid ${LAVENDER_WEB}`,
      borderRadius: "4px"
    }

    const focusedState = {
      outline: "none",
      borderColor: MEDIUM_PURPLE
    }

    return state.isFocused ? {
      ...baseStyles,
      focusedState
    } : baseStyles
  },
  placeholder: (provided, _state) => ({
    ...provided,
    color: GLAUCOUS,
  }),
  input: (provided, _state) => ({
    lineHeight: "48px",
    color: RICH_BLACK,
    fontFamily: SPARTAN,
    fontSize: "12px",
    fontWeight: 700,
    height: "48px",
    padding: 0,
    margin: 0,
    width: "100%"
  }),
  indicatorSeparator: (_provided, _state) => ({
    display: "none"
  }),
  indicatorsContainer: (provided, _state) => ({
    ...provided,
    svg: {
      width: "16px",
      fill: MEDIUM_SLATE_BLUE
    },
    padding: "0 8px"
  }),
  menu: (provided, _state) => ({
    ...provided,
    boxShadow: "0px 10px 20px rgba(72, 84, 159, 0.25)",
    borderRadius: "8px",
    padding: 0
  }),
  menuList: (provided, _state) => ({
    ...provided,
    padding: 0
  }),
  option: (provided, state) => {
    console.log(state)
    const baseStyles = {
      ...provided,
      padding: "16px 24px",
      borderBottom: `1px solid ${LAVENDER_WEB}`
    }

    if (state.isFocused) return {
      ...baseStyles,
      backgroundColor: state.isSelected ? CULTURED : "none",
      color: MEDIUM_SLATE_BLUE
    }

    if (state.isSelected) return {
      ...baseStyles,
      backgroundColor: CULTURED,
      color: RICH_BLACK
    }
    
    return  baseStyles
  }
}
