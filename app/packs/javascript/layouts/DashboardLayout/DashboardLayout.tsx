import React from 'react';
import { Navigation } from '../../components/Navigation';
import { DashboardLayoutContainer, DashboardLayoutMainContainer } from './DashboardLayout.styled'

export const DashboardLayout = ({ children }) => (
  <DashboardLayoutContainer>
    <Navigation />
    <DashboardLayoutMainContainer>
      { children }
    </DashboardLayoutMainContainer>
  </DashboardLayoutContainer>
)
