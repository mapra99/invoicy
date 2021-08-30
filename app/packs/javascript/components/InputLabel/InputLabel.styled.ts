import styled from 'styled-components'
import { COLORS, FONTS } from '../../constants'

const { SPARTAN } = FONTS;

export const InputLabel = styled.label`
  color: ${props => props.theme.forms.labels};
  display: block;
  font-family: ${SPARTAN};
  font-size: 12px;
  letter-spacing: -0.25px;
  line-height: 1.25;
  margin-bottom: 10px;
`
