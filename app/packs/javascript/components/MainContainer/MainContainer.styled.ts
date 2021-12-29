import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants';

const { BREAKPOINT_S, BREAKPOINT_XL } = BREAKPOINTS;

export const MainContainer = styled.div`
  width: 100%;
  padding: 32px 24px 0;
  max-width: 826px;
  margin: 72px auto 0;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding: 56px 48px 0;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    padding: 0 48px;
  }
`;
