import styled from 'styled-components'
import { BREAKPOINTS } from '../../constants'

const {
  BREAKPOINT_XL
} = BREAKPOINTS

export const DashboardLayoutContainer = styled.div`
  min-height: 100vh;

  @media (min-width: ${BREAKPOINT_XL}px) {
    display: flex;
    height: 100vh;
  }
`
