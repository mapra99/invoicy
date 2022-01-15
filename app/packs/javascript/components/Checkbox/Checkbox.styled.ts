import styled from 'styled-components';
import { Text } from '../Text';

export const CheckboxLabel = styled.label`
  display: flex;
  gap: 13px;
  align-items: center;

  &:hover {
    cursor: pointer;

    .checkbox-mark {
      border-color: ${(props) => props.theme.buttons.checkbox.primary};
    }
  }
`;

export const CheckboxText = styled(Text)`
  margin: 0;
  font-weight: 700;
`;

export const CheckboxInput = styled.input`
  display: none;
`;

export const CheckboxMark = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.buttons.checkbox.secondary};
  background: ${(props) => props.theme.buttons.checkbox.secondary};
  text-align: center;
  vertical-align: middle;

  &.checked {
    background: ${(props) => props.theme.buttons.checkbox.primary};
    border-color: ${(props) => props.theme.buttons.checkbox.primary};
  }

  svg {
    width: 10px;
    height: 10px;
  }
`;
