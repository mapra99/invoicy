import React from 'react';
import { InputLabel } from '../InputLabel';
import { StyledInputGroup } from './InputGroup.styled';
import { InputGroupProps } from './types';

export const InputGroup = ({ label, htmlFor, children }: InputGroupProps) => (
  <StyledInputGroup>
    <InputLabel htmlFor={htmlFor}>
      {label}
    </InputLabel>

    {children}
  </StyledInputGroup>
)
