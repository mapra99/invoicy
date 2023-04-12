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
  TableHead,
  TableBody,
  TotalPriceWrapper,
  TotalPriceLabel,
  TotalPriceValue,
} from './InvoiceItemsTable.styled';

export const InvoiceItemsTable = ({ items, totalPrice, currency }: InvoiceItemsTableProps) => (
  <InvoiceItemsTableWrapper>
    <ItemsTable>
      <TableHead>
        <TableRow>
          <TableHeading>
            <Text color="tertiary">Item Name</Text>
          </TableHeading>
          <TableHeading>
            <Text color="tertiary" align="center">QTY.</Text>
          </TableHeading>
          <TableHeading>
            <Text color="tertiary" align="right">Price</Text>
          </TableHeading>
          <TableHeading>
            <Text color="tertiary" align="right">Total</Text>
          </TableHeading>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map((item) => (
          <TableRow key={item.name}>
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
      </TableBody>
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
