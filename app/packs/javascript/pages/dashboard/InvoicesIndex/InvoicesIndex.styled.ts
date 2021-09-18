import styled from 'styled-components';
import { Text } from '../../../components/Text'
import { BREAKPOINTS } from '../../../constants'

const { BREAKPOINT_S } = BREAKPOINTS

export const MainContainer = styled.div`
  width: 100%;
  padding: 32px 24px 0;
  max-width: 780px;
  margin: 0 auto;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding: 56px 48px 0;
  }
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeadingTitle = styled.div`
`

export const InvoiceCountText = styled(Text)`
  margin-top: 4px;
  color: ${props => props.theme.invoices.countText};

  @media (min-width: ${BREAKPOINT_S}px) {
    margin-top: 8px;
  }
`

export const HeadingActions = styled.div`
`
