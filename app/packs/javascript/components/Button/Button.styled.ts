import styled from 'styled-components';
import { FONTS, COLORS } from '../../constants';

const { SPARTAN } = FONTS;

export const Button = styled.button`
  border: 0;
  border-radius: 24px;
  height: 48px;
  font-family: ${SPARTAN};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.25px;
  line-height: 1.25;
  padding: 0 24px;
  text-align: center;
  transition: background-color 0.2s;
  
  &:hover {
    cursor: pointer;
  }
`;
