import styled from 'styled-components'
import { BREAKPOINTS } from '../../constants'

const { BREAKPOINT_XL } = BREAKPOINTS

export const ModalOverlay = styled.div`
  z-index: 99;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: hidden;

  @media (min-width: ${BREAKPOINT_XL}px) {
    padding-left: 103px;
  }
`
