import React from 'react';
import Select from 'react-select'
import { selectStyles } from './SelectField.styles'

export const SelectField = ({options}) => (
  <Select
    options={options}
    styles={selectStyles}
  />
)
