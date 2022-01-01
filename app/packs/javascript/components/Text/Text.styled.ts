import styled from 'styled-components';
import { TextProps } from './types';
import { FONTS } from '../../constants';

const { SPARTAN } = FONTS;

const typeSpecifics = {
  body1: `
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: -0.25px;
  `,
  body2: `
    font-size: 11px;
    line-height: 1.63;
    letter-spacing: -0.23px;
  `,
};

export const Text = styled.p<TextProps>`
  font-family: ${SPARTAN};
  color: ${(props) => props.theme.text.primary};
  font-weight: 500;
  ${(props) => typeSpecifics[props.type] || typeSpecifics.body1}
`;
