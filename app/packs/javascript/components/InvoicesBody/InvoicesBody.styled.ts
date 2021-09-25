import styled from 'styled-components'
import { BREAKPOINTS } from '../../constants'

const { BREAKPOINT_S, BREAKPOINT_XL } = BREAKPOINTS

export const InvoicesBodyWrapper = styled.div`
  padding-top: 32px;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding-top: 56px;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    padding-top: 65px;
  }
`

export const LoadingSpinnerWrapper = styled.div`
  margin: 30px auto;

  .trinity-rings-spinner {
    width: 100%;
  }
`
