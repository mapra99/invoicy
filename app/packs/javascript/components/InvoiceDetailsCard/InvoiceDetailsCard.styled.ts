import styled from 'styled-components';
import { Card } from '../Card';
import { BREAKPOINTS } from '../../constants'

const { BREAKPOINT_S, BREAKPOINT_XL } = BREAKPOINTS

export const InvoiceDetailsCardWrapper = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding: 32px;
  }

  @media (min-width: ${BREAKPOINT_XL}px) {
    padding: 48px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: ${BREAKPOINT_S}px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const InvoiceNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
  white-space: nowrap;
`;

export const DetailsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (min-width: ${BREAKPOINT_S}px) {
    width: 100%;
  }
`;

export const DatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: ${BREAKPOINT_S}px) {
    flex: 0.5 0.5;
  }
`

export const ClientDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${BREAKPOINT_S}px) {
    flex: 0.5 0.5;
  }
`;

export const TargetEmailWrapper = styled.div`
  @media (min-width: ${BREAKPOINT_S}px) {
    flex: 1 1;
  }
`
