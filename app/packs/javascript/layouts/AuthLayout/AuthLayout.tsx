import React from 'react';
import {
  AuthLayoutContainer,
  AuthLayoutContentWrapper
} from './AuthLayout.styled'

export const AuthLayout = ({ children }) => (
  <AuthLayoutContainer>
    <AuthLayoutContentWrapper>
      {children}
    </AuthLayoutContentWrapper>
  </AuthLayoutContainer>
)
