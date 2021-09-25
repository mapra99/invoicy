import styled from 'styled-components'
import { Title } from '../Title'

export const StyledInvoiceStatus = styled.div`
  height: 40px;
  width: 104px;
  text-align: center;
  position: relative;
  border-radius: 6px;
`

export const InvoiceStatusOverlay = styled.div`
  opacity: 0.06;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 6px;

  &.paid {
    background: ${props => props.theme.invoices.status.paid};
  }

  &.pending {
    background: ${props => props.theme.invoices.status.pending};
  }

  &.draft {
    background: ${props => props.theme.invoices.status.draft};
  }
`

export const InvoiceStatusText = styled(Title)`
  line-height: 40px;

  &.paid {
    color: ${props => props.theme.invoices.status.paid};

    &:before {
      background: ${props => props.theme.invoices.status.paid};
    }
  }

  &.pending {
    color: ${props => props.theme.invoices.status.pending};

    &:before {
      background: ${props => props.theme.invoices.status.pending};
    }
  }

  &.draft {
    color: ${props => props.theme.invoices.status.draft};

    &:before {
      background: ${props => props.theme.invoices.status.draft};
    }
  }

  &::before {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    content: "";
    margin-right: 8px;
  }
`
