import styled from 'styled-components';
import { TitleProps } from './types';
import { FONTS } from '../../constants';
import { COLORS } from '../../constants';

const { SPARTAN } = FONTS;
const { RICH_BLACK } = COLORS;

const typeSpecifics = {
  h1: `
    font-size: 32px;
    line-height: 1.125;
    letter-spacing: -1px;
  `,
  h2: `
    font-size: 20px;
    line-height: 1.1;
    letter-spacing: -0.63px;
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
  `
}

export const Title = styled.h1<TitleProps>`
  font-family: ${SPARTAN};
  color: ${RICH_BLACK};
  font-weight: 700;
  ${props => typeSpecifics[props.as] || typeSpecifics.h1 }
`
