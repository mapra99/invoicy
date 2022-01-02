import React from 'react';
import { InvoiceItemsTableProps } from './types';
import { formatCurrency } from '../../utils/formatCurrency';
import { Text } from '../Text';
import { Title } from '../Title';
import {
  InvoiceItemsTableWrapper,
  ItemsTable,
  TableHeading,
  TableRow,
  TableData,
  TotalPriceWrapper,
  TotalPriceLabel,
  TotalPriceValue,
} from './InvoiceItemsTable.styled';

export const InvoiceItemsTable = ({ items, totalPrice, currency }: InvoiceItemsTableProps) => (
  <InvoiceItemsTableWrapper>
    <ItemsTable>
      <TableRow>
        <TableHeading>
          <Text color="tertiary">Item Name</Text>
        </TableHeading>
        <TableHeading align="center">
          <Text color="tertiary">QTY.</Text>
        </TableHeading>
        <TableHeading align="right">
          <Text color="tertiary">Price</Text>
        </TableHeading>
        <TableHeading align="right">
          <Text color="tertiary">Total</Text>
        </TableHeading>
      </TableRow>

      {items.map((item) => (
        <TableRow>
          <TableData>
            <Title as="h4">{ item.name }</Title>
          </TableData>
          <TableData align="center">
            <Title as="h4" color="tertiary">{ item.quantity }</Title>
          </TableData>
          <TableData align="right">
            <Title as="h4" color="tertiary">
              { formatCurrency(item.fixedUnitPrice, item.currency) }
            </Title>
          </TableData>
          <TableData align="right">
            <Title as="h4">
              { formatCurrency(item.totalPrice, item.currency) }
            </Title>
          </TableData>
        </TableRow>
      ))}
    </ItemsTable>

    <TotalPriceWrapper>
      <TotalPriceLabel>
        Amount Due
      </TotalPriceLabel>

      <TotalPriceValue as="h2">
        { formatCurrency(totalPrice, currency) }
      </TotalPriceValue>
    </TotalPriceWrapper>
  </InvoiceItemsTableWrapper>
);
