import styled from 'styled-components';
import { Title } from '../../Title';

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;

  &:first-child {
    padding: 0 0 12px;
  }

  &:last-child {
    padding: 12px 0 0;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemPrice = styled(Title)`
  white-space: nowrap;
`;
