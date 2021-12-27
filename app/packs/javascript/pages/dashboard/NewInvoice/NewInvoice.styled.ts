import styled from 'styled-components'
import { BREAKPOINTS } from '../../../constants'

const { BREAKPOINT_S, BREAKPOINT_XL } = BREAKPOINTS

export const NewInvoiceContainer = styled.div`
  background: ${props => props.theme.invoices.newInvoice.bg};
  width: 100%;
  height: 100%;
  padding: 32px 24px;

  @media (min-width: ${BREAKPOINT_S}px) {
    overflow-y: scroll;
    max-width: 616px;
    padding: 56px;
    border-radius: 0px 20px 20px 0px;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    margin-left: -103px;
    padding-left: 159px;
    max-width: 750px;
  }
`

export const NewInvoiceHeading = styled.div`
  margin: 24px 0;

  @media (min-width: ${BREAKPOINT_S}px) {
    margin-bottom: 48px;
  }
`
