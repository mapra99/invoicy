import styled from 'styled-components';
import { Button } from '../Button';

export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.buttons.secondary.bg};
  color: ${props => props.theme.buttons.secondary.text};

  &:hover {
    background-color: ${props => props.theme.buttons.secondary.bgHover};
  }
`
