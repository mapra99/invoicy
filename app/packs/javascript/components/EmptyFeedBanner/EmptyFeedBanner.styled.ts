import styled from 'styled-components'
import { Title } from '../Title'
import { Text } from '../Text'
import { BREAKPOINTS } from '../../constants'

const { BREAKPOINT_S } = BREAKPOINTS

export const EmptyFeedBannerContainer = styled.div`
  margin: 40px auto;
  width: 220px;

  @media (min-width: ${BREAKPOINT_S}px) {
    width: 240px;
  } 
`

export const EmptyFeedTitle = styled(Title)`
  margin-top: 40px;
  text-align: center;

  @media (min-width: ${BREAKPOINT_S}px) {
    margin-top: 64px;
  }
`

export const EmptyFeedText = styled(Text)`
  margin: 24px auto 0;
  color: ${props => props.theme.text.tertiary};
  text-align: center;
  max-width: 200px;

  @media (min-width: ${BREAKPOINT_S}px) {
    max-width: 224px;
  } 

  b {
    font-weight: bold;
  }
`
