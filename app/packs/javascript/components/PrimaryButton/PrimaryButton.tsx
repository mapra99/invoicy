import React from 'react';
import { StyledPrimaryButton, PrimaryButtonIconWrapper } from './PrimaryButton.styled'
import { PrimaryButtonProps } from './types';

export const PrimaryButton = ({ icon, children }: PrimaryButtonProps) => (
  <StyledPrimaryButton>
    { icon && (
      <PrimaryButtonIconWrapper>
        { icon }
      </PrimaryButtonIconWrapper>
    )}

    { children }
  </StyledPrimaryButton>
)
