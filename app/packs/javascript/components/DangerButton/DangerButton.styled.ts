import styled from 'styled-components';
import { Button } from '../Button';
import { COLORS } from '../../constants';

const { RED_SALSA, LIGHT_CORAL, WHITE } = COLORS;

export const DangerButton = styled(Button)`
  background-color: ${RED_SALSA};
  color: ${WHITE};

  &:hover {
    background-color: ${LIGHT_CORAL};
  }
`;
