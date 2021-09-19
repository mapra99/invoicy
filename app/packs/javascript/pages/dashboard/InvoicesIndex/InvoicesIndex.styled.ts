import styled from 'styled-components';
import { Text } from '../../../components/Text'
import { BREAKPOINTS } from '../../../constants'

const { BREAKPOINT_S, BREAKPOINT_XL } = BREAKPOINTS

export const MainContainer = styled.div`
  width: 100%;
  padding: 32px 24px 0;
  max-width: 780px;
  margin: 72px auto 0;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding: 56px 48px 0;
    margin-top: 80px;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    margin-top: 0;
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
  color: ${props => props.theme.text.tertiary};

  @media (min-width: ${BREAKPOINT_S}px) {
    margin-top: 8px;
  }
`

export const HeadingActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 180px;

  @media (min-width: ${BREAKPOINT_S}px) {
    max-width: 340px;
  }
`
