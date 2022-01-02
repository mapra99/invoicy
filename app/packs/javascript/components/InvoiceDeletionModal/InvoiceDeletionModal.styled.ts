import styled from 'styled-components';
import { Card } from '../Card';
import { Title } from '../Title';
import { Text } from '../Text';
import { BREAKPOINTS } from '../../constants';

const { BREAKPOINT_S } = BREAKPOINTS;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &.loading {
    cursor: progress;
  }
`;

export const ModalCard = styled(Card)`
  width: 100%;
  max-width: 480px;
  margin: 0 24px;
  padding: 32px;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding: 48px;
  }
`;

export const ModalTitle = styled(Title)`
  margin-bottom: 8px;
  font-size: 20px;

  @media (min-width: ${BREAKPOINT_S}px) {
    margin-bottom: 13px;
    font-size: 24px;
  }
`;

export const ModalText = styled(Text)`
  margin-bottom: 24px;
  line-height: 1.83;

  @media (min-width: ${BREAKPOINT_S}px) {
    margin-bottom: 16px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`