import styled from 'styled-components';
import { Button } from '../Button';

export const TertiaryButton = styled(Button)`
  background-color: ${(props) => props.theme.buttons.tertiary.bg};
  color: ${(props) => props.theme.buttons.tertiary.text};

  &:hover {
    background-color: ${(props) => props.theme.buttons.tertiary.bgHover};
  }
`;
