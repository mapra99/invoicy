import styled from 'styled-components';
import { Card } from '../Card';
import { BREAKPOINTS } from '../../constants';

const { BREAKPOINT_S } = BREAKPOINTS;

export const StatusCardWrapper = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding: 20px 32px;
  }
`;

export const CurrentStatusWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${BREAKPOINT_S}px) {
    width: auto;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  background: ${(props) => props.theme.layout.bgSecondary};
  gap: 8px;

  @media (max-width: ${BREAKPOINT_S}px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    padding: 20px 24px;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
    z-index: 2;
  }
`;
