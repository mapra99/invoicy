import React, { useState } from 'react'
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import { CalendarIcon } from '../../icons/CalendarIcon'
import { DatePickerWrapper } from './DatePickerField.styled'
import { DatePickerFieldProps } from './types'

export const DatePickerField = ({ value, onChange }: DatePickerFieldProps) => {
  const [currentValue, setCurrentValue] = useState(value);

  const updateValue = (selectedDate) => {
    setCurrentValue(selectedDate)
    if(onChange) onChange(selectedDate)
  }

  return (
    <DatePickerWrapper>
      <DatePicker
        value={currentValue}
        onChange={updateValue}
        calendarIcon={<CalendarIcon />}
      />
    </DatePickerWrapper>
  )
}
