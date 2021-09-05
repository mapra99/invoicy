import React from 'react';
import { Navigation } from '../../components/Navigation';
import { DashboardLayoutContainer } from './DashboardLayout.styled'

export const DashboardLayout = ({ children }) => (
  <DashboardLayoutContainer>
    <Navigation />
    { children }
  </DashboardLayoutContainer>
)
