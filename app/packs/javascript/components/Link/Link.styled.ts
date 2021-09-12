import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { FONTS } from '../../constants'

const { SPARTAN } = FONTS

export const Link = styled(RouterLink)`
  font-family: ${SPARTAN};
  color: ${props => props.theme.text.primary};
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: -0.25px;
`
