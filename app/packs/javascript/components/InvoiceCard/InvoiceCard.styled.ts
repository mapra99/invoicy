import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from '../Card';
import { Title } from '../Title';
import { Text } from '../Text';
import { BREAKPOINTS } from '../../constants';

const { BREAKPOINT_S } = BREAKPOINTS;

export const InvoiceCardWrapper = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media(min-width: ${BREAKPOINT_S}px) {
    flex-wrap: nowrap;
    align-items: center;
    gap: 20px;
  }
`;

export const InvoiceLink = styled(Link)`
  text-decoration: none;

  &:active {
    text-decoration: none;
  }
`;

export const InvoiceUuidWrapper = styled.div`
  margin-bottom: 24px;
  width: 50%;
  overflow: hidden;
  white-space: nowrap;

  @media(min-width: ${BREAKPOINT_S}px) {
    margin-bottom: 0;
    width: auto;
    flex: 1 1;
  }
`;

export const InvoiceClient = styled(Text)`
  color: ${(props) => props.theme.text.tertiary};
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;

  @media(min-width: ${BREAKPOINT_S}px) {
    width: auto;
    flex: 1 1;
    text-align: left;
  }
`;

export const InvoiceDueDate = styled(Text)`
  color: ${(props) => props.theme.text.tertiary};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &.mobile {
    margin-bottom: 8px;

    @media(min-width: ${BREAKPOINT_S}px) {
      display: none;
    }
  }

  &.desktop {
    flex: 1 1;

    @media(max-width: ${BREAKPOINT_S}px) {
      display: none;
    }
  }
`;

export const InvoicePrice = styled(Title)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media(min-width: ${BREAKPOINT_S}px) {
    font-size: 16px;
    flex: 1 1;
  }
`;

export const InvoiceDueDatePriceWrapper = styled.div`
  width: 50%;

  @media(min-width: ${BREAKPOINT_S}px) {
    width: auto;
    flex: 1 1;
    text-align: right;
    margin-right: 20px;
  }
`;

export const InvoiceCardChevronIconWrapper = styled.div`
  width: 8px;
  height: 8px;
  display: flex;
  align-items: center;

  svg {
    transform: rotate(-90deg);
  }
`;
