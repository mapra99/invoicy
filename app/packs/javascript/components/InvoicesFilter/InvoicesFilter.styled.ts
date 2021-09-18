import styled from 'styled-components'
import { SecondaryButton } from '../SecondaryButton'
import { BREAKPOINTS } from '../../constants'

const { BREAKPOINT_S } = BREAKPOINTS

export const InvoicesFilterButton = styled(SecondaryButton)`
  background: none;
`

export const IconWrapper = styled.div`
  margin-left: 12px;
  width: 10px;
  display: inline-block;

  svg {
    width: 100%;
  }
`
