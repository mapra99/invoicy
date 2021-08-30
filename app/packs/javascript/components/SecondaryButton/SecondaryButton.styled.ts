import styled from 'styled-components';
import { Button } from '../Button';
import { COLORS } from '../../constants'

const { GHOST_WHITE, LAVENDER_WEB, GLAUCOUS } = COLORS;

export const SecondaryButton = styled(Button)`
  background-color: ${GHOST_WHITE};
  color: ${GLAUCOUS};

  &:hover {
    background-color: ${LAVENDER_WEB};
  }
`
