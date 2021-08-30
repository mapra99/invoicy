import React from 'react';
import Select from 'react-select'
import { selectStyles } from './SelectField.styles'

// TODO: Type the props of this component :)
export const SelectField = ({options}) => (
  <Select
    options={options}
    styles={selectStyles}
  />
)
