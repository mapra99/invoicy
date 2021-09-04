// This module isn't using styled components. It contains a set of
// override styles for the react-select Select component, which uses emotion.js

import { FONTS } from '../../constants'

const { SPARTAN } = FONTS

// TODO: Type theme argument
export const selectStyles = (theme) => ({
  valueContainer: (provided, _state) => ({
    ...provided,
    height: "48px",
    padding: "0 20px"
  }),
  container: (provided, _state) => ({
    ...provided,
    color: theme.forms.input.text,
    fontFamily: SPARTAN,
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: 1.25
  }),
  control: (provided, state) => {
    const baseStyles = {
      ...provided,
      transition: "border-color 0.2s",
      border: `1px solid ${theme.forms.input.border}`,
      borderRadius: "4px",
      backgroundColor: theme.forms.input.bg
    }

    const focusedState = {
      outline: "none",
      borderColor: theme.forms.input.borderFocus
    }

    return state.isFocused ? {
      ...baseStyles,
      focusedState
    } : baseStyles
  },
  placeholder: (provided, _state) => ({
    ...provided,
    color: theme.forms.input.placeholder,
  }),
  input: (provided, _state) => ({
    lineHeight: "48px",
    color: theme.forms.input.text,
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
      fill: theme.forms.input.textSecondary
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
  singleValue: (provided, _state) => ({
    ...provided,
    color: theme.forms.input.text
  }),
  option: (provided, state) => {
    console.log(state)
    const baseStyles = {
      ...provided,
      padding: "16px 24px",
      borderBottom: `1px solid ${theme.forms.input.border}`,
      backgroundColor: theme.forms.input.bg
    }

    if (state.isFocused) return {
      ...baseStyles,
      backgroundColor: theme.forms.input.bg,
      color: theme.forms.input.textSecondary
    }

    if (state.isSelected) return {
      ...baseStyles,
      backgroundColor: theme.forms.input.bg,
      color: theme.forms.input.textSecondary
    }
    
    return  baseStyles
  }
})
