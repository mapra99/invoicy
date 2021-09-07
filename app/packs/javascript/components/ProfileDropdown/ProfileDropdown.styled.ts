import styled from 'styled-components';
import { Button } from '../Button'
import { BREAKPOINTS } from '../../constants'

const {
  BREAKPOINT_S,
  BREAKPOINT_XL
} = BREAKPOINTS

export const ProfileDropdownButton = styled(Button)`
  height: 32px;
  margin: 0 24px;
  padding: 5px;
  width: 32px;
  background: ${props => props.theme.layout.buttons };

  @media (min-width: ${BREAKPOINT_S}px) {
    margin: 0 32px;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    height: 40px;
    margin: 32px;
    width: 40px;
  }

  svg {
    border-radius: 50%;
    fill: ${props => props.theme.layout.navbar}
  }
`
