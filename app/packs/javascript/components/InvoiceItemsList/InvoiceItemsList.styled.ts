import styled from 'styled-components';
import { Card } from '../Card';
import { Text } from '../Text';
import { Title } from '../Title';

export const InvoiceItemsListWrapper = styled(Card)`
  background: ${(props) => props.theme.invoices.itemsList.bgPrimary};
  padding-bottom: 92px;
  position: relative;
  border: none;
  width: 100%;
  margin: 0;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding: 24px;
  background: ${(props) => props.theme.invoices.itemsList.bgSecondary};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 8px 8px;
`;

export const TotalPriceLabel = styled(Text)`
  color: ${(props) => props.theme.invoices.itemsList.neutralText};
`;

export const TotalPriceValue = styled(Title)`
  color: ${(props) => props.theme.invoices.itemsList.neutralText};
`;
