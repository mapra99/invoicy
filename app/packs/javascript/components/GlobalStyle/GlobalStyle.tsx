import { createGlobalStyle } from 'styled-components'
import { FONTS } from '../../constants'

const { SPARTAN } = FONTS;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.layout.bg};
    font-family: ${SPARTAN};
  }

  * {
    transition: background-color 0.1s linear;
  }
`
