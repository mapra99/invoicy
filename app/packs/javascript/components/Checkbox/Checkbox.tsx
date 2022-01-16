import React from 'react';
import { useCheckbox } from '../../hooks/useCheckbox';
import { CheckboxProps } from './types';
import { CheckMarkIcon } from '../../icons/CheckMarkIcon';
import {
  CheckboxLabel,
  CheckboxText,
  CheckboxInput,
  CheckboxMark,
} from './Checkbox.styled';

export const Checkbox = ({
  value, name, label, checked, onChange,
}: CheckboxProps) => {
  const { isChecked, handleChange } = useCheckbox(checked, onChange);

  return (
    <CheckboxLabel className={isChecked ? 'checked' : 'unchecked'}>
      <CheckboxInput
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />

      <CheckboxMark className={`checkbox-mark ${isChecked ? 'checked' : 'unchecked'}`}>
        { isChecked && <CheckMarkIcon /> }
      </CheckboxMark>

      <CheckboxText type="body1">
        { label }
      </CheckboxText>
    </CheckboxLabel>
  );
};
