import styled from 'styled-components'
import { Title } from '../Title'
import { BREAKPOINTS } from '../../constants'

const { BREAKPOINT_S, BREAKPOINT_XL } = BREAKPOINTS;

export const InvoiceFormWrapper = styled.form`
  padding-bottom: 88px;
  
  @media (min-width: ${BREAKPOINT_XL}px) {
    padding-bottom: 0;
  }
`

export const InvoiceFormSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 24px;

  > * {
    width: 100%;
  }

  &:not(:last-child) {
    margin-bottom: 40px;

    @media (min-width: ${BREAKPOINT_S}px) {
      margin-bottom: 48px;
    }
  }
`

export const InvoiceFormSectionTitle = styled(Title)`
  color: ${props => props.theme.text.secondary};
  margin-bottom: 24px;
  width: 100%;
`

export const CityWrapper = styled.div`
  flex: 1 1;
  margin-bottom: 24px;

  @media (min-width: ${BREAKPOINT_S}px) {
    margin-bottom: 0;
  }
`

export const PostcodeWrapper = styled.div`
  flex: 1 1;
  margin-bottom: 24px;

  @media (min-width: ${BREAKPOINT_S}px) {
    margin-bottom: 0;
  }
`

export const CountryWrapper = styled.div`
  @media (min-width: ${BREAKPOINT_S}px) {
    flex: 1 1;
  }
`

export const InvoiceDateWrapper = styled.div`
  margin-bottom: 24px;

  @media (min-width: ${BREAKPOINT_S}px) {
    flex: 1 1;
  }
`

export const PaymentTermsWrapper = styled.div`
  margin-bottom: 24px;

  @media (min-width: ${BREAKPOINT_S}px) {
    flex: 1 1;
  }
`

export const InvoiceFormControlsWrapper = styled.div`
  background: ${props => props.theme.layout.bgSecondary};
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 22px 24px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.1);
  position: fixed;

  @media (min-width: ${BREAKPOINT_S}px) {
    background: ${props => props.theme.invoices.newInvoice.bg};
    position: static;
    padding: 22px 0;
    box-shadow: none;
  }
`
