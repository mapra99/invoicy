import styled from 'styled-components';
import { Button } from '../Button';

export const TransparentButton = styled(Button)`
  padding: 0;
  background: none;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.text.primary};

  svg {
    width: 20px;
    height: 20px;
  }
`;
