import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext'
import { Navigation } from '../../components/Navigation';
import {
  DashboardLayoutContainer,
  DashboardLayoutMainContainer
} from './DashboardLayout.styled'

export const DashboardLayout = ({ children }) => {
  const { modalActive } = useContext(ModalContext)

  return (
    <DashboardLayoutContainer className={modalActive ? "modal-active" : ""}>
      <Navigation />
      <DashboardLayoutMainContainer>
        { children }
      </DashboardLayoutMainContainer>
    </DashboardLayoutContainer>
  )
}
