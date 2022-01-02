import styled from 'styled-components';
import { CardProps } from './types';
import { BREAKPOINTS } from '../../constants';

const { BREAKPOINT_S } = BREAKPOINTS;

export const Card = styled.div<CardProps>`
  padding: 24px;
  background: ${(props) => props.theme.layout.bgSecondary};
  box-shadow: ${(props) => (props.shadow ? '0px 10px 10px -10px rgba(72, 84, 159, 0.1)' : 'none')};
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0);
  margin-bottom: 16px;
  transition: border 0.2s;

  @media(min-width: ${BREAKPOINT_S}px) {
    padding: 16px 24px;
  }

  ${(props) => (props.hover ? `
    &:hover {
      cursor: pointer;
      border: 1px solid ${props.theme.text.secondary};
    }
  ` : '')}
`;
