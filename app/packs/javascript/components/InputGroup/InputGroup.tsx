import React from 'react';
import { InputLabel } from '../InputLabel';
import { StyledInputGroup, ErrorMessage } from './InputGroup.styled';
import { InputGroupProps } from './types';

export const InputGroup = ({ label, htmlFor, error, children }: InputGroupProps) => (
  <StyledInputGroup>
    <InputLabel htmlFor={htmlFor}>
      {label}
    </InputLabel>

    {children}

    { error && <ErrorMessage>{ error }</ErrorMessage> }
  </StyledInputGroup>
)
