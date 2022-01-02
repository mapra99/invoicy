import styled from 'styled-components';
import { TitleProps } from './types';
import { FONTS, BREAKPOINTS } from '../../constants';

const { SPARTAN } = FONTS;
const { BREAKPOINT_S } = BREAKPOINTS;

const typeSpecifics = {
  h1: `
    line-height: 1.125;
    font-size: 20px;

    @media (min-width: ${BREAKPOINT_S}px) {
      font-size: 32px;
      letter-spacing: -1px;
    }
  `,
  h2: `
    font-size: 18px;
    line-height: 1.1;
    letter-spacing: -0.63px;

    @media (min-width: ${BREAKPOINT_S}px) {
      font-size: 20px;
    }
  `,
  h3: `
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.8px;
  `,
  h4: `
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: -0.25px;
  `,
};

export const Title = styled.h1<TitleProps>`
  font-family: ${SPARTAN};
  color: ${(props) => props.theme.text.primary};
  font-weight: 700;
  ${(props) => typeSpecifics[props.as] || typeSpecifics.h1}
`;
