import styled from 'styled-components'
import { FONTS } from '../../constants'

const { SPARTAN } = FONTS;

export const InputField = styled.input`
  display: block;
  height: 48px;
  background-color: ${props => props.theme.forms.input.bg};
  border: 1px solid ${props => props.theme.forms.input.border};
  border-radius: 4px;
  color: ${props => props.theme.forms.input.text};
  font-size: 12px;
  font-family: ${SPARTAN};
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.25px;
  transition: border-color 0.2s;
  width: 100%;
  padding: 0 20px;

  &:focus {
    border-color: ${props => props.theme.forms.input.borderFocus};
    outline: none;
  }
`
