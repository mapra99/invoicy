import styled from 'styled-components'

export const NewInvoiceContainer = styled.div`
  background: ${props => props.theme.invoices.newInvoice.bg};
  width: 100%;
  height: 100%;
  padding: 32px 24px;
  max-width: 719px;
  overflow-y: scroll;
`

export const NewInvoiceHeading = styled.div`
  margin: 24px 0;
`
