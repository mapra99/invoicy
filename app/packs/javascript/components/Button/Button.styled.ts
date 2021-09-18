import styled from 'styled-components';
import { FONTS, BREAKPOINTS } from '../../constants';

const { SPARTAN } = FONTS;
const { BREAKPOINT_S } = BREAKPOINTS;

export const Button = styled.button`
  border: 0;
  border-radius: 24px;
  height: 44px;
  font-family: ${SPARTAN};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.25px;
  line-height: 1.25;
  padding: 0 14px;
  text-align: center;
  transition: background-color 0.2s;

  @media (min-width: ${BREAKPOINT_S}px) {
    height: 48px;
    padding: 0 24px;
  }
  
  &:hover {
    cursor: pointer;
  }
`;
