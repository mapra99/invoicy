import styled from 'styled-components';
import { Button } from '../Button'
import { BREAKPOINTS } from '../../constants'

const {
  BREAKPOINT_S,
  BREAKPOINT_XL
} = BREAKPOINTS

export const TransparentButton = styled(Button)`
  padding: 0 24px;
  background: none;
  box-sizing: content-box;
  width: 20px;
  height: 20px;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding: 0 32px;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    padding: 32px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`
