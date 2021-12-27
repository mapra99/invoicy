import styled from 'styled-components'
import { SecondaryButton } from '../SecondaryButton'

export const StyledGoBackButton = styled(SecondaryButton)`
  background: none;
  color: ${props => props.theme.text.primary};
  padding: 0;
  height: auto;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    background: none;
  }
`

export const GoBackButtonIconWrapper = styled.div`
  width: 9px;
  margin-right: 20px;

  svg {
    transform: rotate(90deg);
  }
`
