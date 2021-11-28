import styled from 'styled-components';
import { Title } from '../Title'
import { TransparentButton } from '../TransparentButton'
import { BREAKPOINTS } from '../../constants'

const { BREAKPOINT_S } = BREAKPOINTS

export const InvoiceItemInputWrapper = styled.div`
  margin-bottom: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 16px;

  @media (min-width: ${BREAKPOINT_S}px) {
    margin-bottom: 18px;
  }

  > * {
    width: 100%;
  }
`

export const ItemNameWrapper = styled.div`
  margin-bottom: 24px;

  @media (min-width: ${BREAKPOINT_S}px) {
    flex: 2 2;
    margin-bottom: 0;
  }
`

export const QuantityWrapper = styled.div`
  flex: 0.7 0.7;
`

export const PriceWrapper = styled.div`
  flex: 1 1;
`

export const TotalPriceWrapper = styled.div`
  flex: 1 1;
`

export const DeleteButtonWrapper = styled.div`
  flex: 0.15 0.15;
  align-items: center;
  display: flex;
  padding-top: 25px;
`

export const DeleteButton = styled(TransparentButton)`
  padding: 0;
  width: auto;

  svg {
    width: 100%;
  }
`

export const TotalPriceText = styled(Title)`
  color: ${props => props.theme.invoices.newInvoice.totalPrice};
  line-height: 48px;
`
