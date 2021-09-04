import React from 'react';
import { StyledPrimaryButton, PrimaryButtonIconWrapper } from './PrimaryButton.styled'
import { PrimaryButtonProps } from './types';

export const PrimaryButton = ({ icon, children, ...props }: PrimaryButtonProps) => (
  <StyledPrimaryButton {...props} >
    { icon && (
      <PrimaryButtonIconWrapper>
        { icon }
      </PrimaryButtonIconWrapper>
    )}

    { children }
  </StyledPrimaryButton>
)
