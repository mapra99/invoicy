import styled from 'styled-components'
import { BREAKPOINTS } from '../../constants'

const { BREAKPOINT_S, BREAKPOINT_XL } = BREAKPOINTS

export const InvoicesBodyWrapper = styled.div`
  padding: 32px 0;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding: 56px 0;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    padding: 65px 0;
  }
`

export const LoadingSpinnerWrapper = styled.div`
  margin: 30px auto;

  .trinity-rings-spinner {
    width: 100%;
  }
`
