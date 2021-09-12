import styled from 'styled-components';
import { Button } from '../Button'
import { SecondaryButton } from '../SecondaryButton'
import { BREAKPOINTS } from '../../constants'

const {
  BREAKPOINT_S,
  BREAKPOINT_XL
} = BREAKPOINTS

export const ProfileDropdownWrapper = styled.div`
  position: relative;
  margin: 0 24px;

  @media (min-width: ${BREAKPOINT_S}px) {
    margin: 0 32px;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    margin: 32px;
  }
`

export const ProfileDropdownButton = styled(Button)`
  height: 32px;
  padding: 5px;
  width: 32px;
  background: ${props => props.theme.layout.buttons };

  @media (min-width: ${BREAKPOINT_XL}px) {
    height: 40px;
    width: 40px;
  }

  svg {
    border-radius: 50%;
    fill: ${props => props.theme.layout.navbar}
  }
`

export const ProfileDropdownOptionsWrapper = styled.div`
  position: absolute;
  right: 0;
  min-width: 180px;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 8px;
  background-color: ${props => props.theme.buttons.secondary.bg};

  @media (min-width: ${BREAKPOINT_S}px) {
    min-width: 240px;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    left: 40px;
    bottom: 0;
  }
`

export const ProfileDropdownOption = styled(SecondaryButton)`
  width: 100%;
  background: none;
  border-radius: 0;

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }

  &:only-child {
    border-radius: 8px;
  }
`
