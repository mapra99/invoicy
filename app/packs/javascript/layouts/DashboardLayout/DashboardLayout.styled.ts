import styled from 'styled-components'
import { BREAKPOINTS } from '../../constants'

const {
  BREAKPOINT_S,
  BREAKPOINT_XL
} = BREAKPOINTS

export const DashboardLayoutContainer = styled.div`
  min-height: 100vh;

  @media (min-width: ${BREAKPOINT_XL}px) {
    display: flex;
    height: 100vh;
  }

  &.modal-active {
    overflow-y: hidden;
    max-height: 100vh;
  }
`

export const DashboardLayoutMainContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 72px;

  @media (min-width: ${BREAKPOINT_S}px) {
    margin-top: 80px;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    margin-top: 0;
  }
`
