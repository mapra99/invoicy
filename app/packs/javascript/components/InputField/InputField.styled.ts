import styled from 'styled-components'
import { COLORS, FONTS } from '../../constants'

const { LAVENDER_WEB, MEDIUM_PURPLE } = COLORS;
const { SPARTAN } = FONTS;

export const InputField = styled.input`
  display: block;
  height: 48px;
  border: 1px solid ${LAVENDER_WEB};
  border-radius: 4px;
  font-family: ${SPARTAN};
  font-weight: 700;
  transition: border-color 0.2s;
  width: 100%;
  padding: 0 20px;

  &:focus {
    border-color: ${MEDIUM_PURPLE};
    outline: none;
  }
`
