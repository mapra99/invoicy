import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants';

const { BREAKPOINT_S } = BREAKPOINTS;

export const InvoiceDetailsWrapper = styled.div`
  @media (max-width: ${BREAKPOINT_S}px) {
    padding-bottom: 84px;
  }
`;

export const StatusCardWrapper = styled.div`
  margin: 32px 0 16px;

  @media (min-width: ${BREAKPOINT_S}px) {
    margin: 32px 0 24px;
  }
`;
