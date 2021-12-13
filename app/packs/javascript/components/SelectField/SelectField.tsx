import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import Select from 'react-select'
import { selectStyles } from './SelectField.styles'
import { SelectFieldProps, Option } from './types'

export const SelectField = ({ options, value, onChange }: SelectFieldProps) => {
  const findOptionFor = (value) => options.find(option => option.value === value)

  const themeContext = useContext(ThemeContext);
  const [currentValue, setCurrentValue] = useState<Option | null>(findOptionFor(value))

  const updateValue = (selectedOption: Option) => {
    setCurrentValue(selectedOption)
    if(onChange) onChange(selectedOption.value)
  }

  return (
    <Select
      options={options}
      styles={selectStyles(themeContext)}
      onChange={updateValue}
      value={currentValue}
    />
  )
}
