import styled from 'styled-components';
import { Text } from '../Text'

export const StyledInputGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`

export const ErrorMessage = styled(Text)`
  color: ${props => props.theme.text.danger};
  margin-top: 4px;
`
