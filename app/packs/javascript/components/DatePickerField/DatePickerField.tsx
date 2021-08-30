import React, { useState } from 'react'
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import { CalendarIcon } from '../../icons/CalendarIcon'
import { DatePickerWrapper } from './DatePickerField.styled'

export const DatePickerField = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePickerWrapper>
      <DatePicker
        value={value}
        onChange={setValue}
        calendarIcon={<CalendarIcon />}
      />
    </DatePickerWrapper>
  )
}
