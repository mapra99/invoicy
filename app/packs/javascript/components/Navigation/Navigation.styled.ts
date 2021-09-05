import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants'

const {
  BREAKPOINT_S,
  BREAKPOINT_XL
} = BREAKPOINTS

export const NavigationContainer = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${props => props.theme.layout.navbar};
  display: flex;
  align-items: center;

  @media (min-width: ${BREAKPOINT_S}px) {
    height: 80px;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    width: 103px;
    height: 100%;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0 30px 30px 0;
  }
`

export const NavigationLogoWrapper = styled.div`
  width: 72px;
  height: 72px;

  @media (min-width: ${BREAKPOINT_S}px) {
    height: 80px;
    width: 80px;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    height: 103px;
    width: 103px;
  }

  svg {
    height: 100%;
  }
`

export const NavigationRightBottomWrapper = styled.div`
  @media (max-width: ${BREAKPOINT_XL}px) {
    margin-left: auto;
  }
`
