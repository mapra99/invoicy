import React from 'react';
import { InvoiceItemsListProps } from './types';
import { formatCurrency } from '../../utils/formatCurrency';
import { ListItem } from './ListItem';
import {
  InvoiceItemsListWrapper,
  TotalPriceWrapper,
  TotalPriceLabel,
  TotalPriceValue,
} from './InvoiceItemsList.styled';

export const InvoiceItemsList = ({ items, totalPrice, currency }: InvoiceItemsListProps) => (
  <InvoiceItemsListWrapper>
    {items.map((item) => (
      <ListItem key={item.name} item={item} />
    ))}

    <TotalPriceWrapper>
      <TotalPriceLabel>
        Amount Due
      </TotalPriceLabel>

      <TotalPriceValue as="h2">
        { formatCurrency(totalPrice, currency) }
      </TotalPriceValue>
    </TotalPriceWrapper>
  </InvoiceItemsListWrapper>
);
