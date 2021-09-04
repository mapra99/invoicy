import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Select from 'react-select'
import { selectStyles } from './SelectField.styles'

// TODO: Type the props of this component :)
export const SelectField = ({options}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Select
      options={options}
      styles={selectStyles(themeContext)}
    />
  )
}
