import React from 'react';
import { formatCurrency } from '../../../utils/formatCurrency';
import { ListItemProps } from './types';
import { Title } from '../../Title';
import {
  ListItemWrapper,
  ItemDetails,
  ItemPrice
} from './ListItem.styled';

export const ListItem = ({ item }: ListItemProps) => {
  const {
    name, quantity, currency, fixedUnitPrice, totalPrice,
  } = item;
  const formattedUnitPrice = formatCurrency(fixedUnitPrice, currency)
  const formattedTotalPrice = formatCurrency(totalPrice, currency)

  return (
    <ListItemWrapper>
      <ItemDetails>
        <Title as="h4">
          {name}
        </Title>
        <Title as="h4" color="tertiary">
          {`${quantity} x ${formattedUnitPrice}`}
        </Title>
      </ItemDetails>

      <ItemPrice as="h4">
        { formattedTotalPrice }
      </ItemPrice>
    </ListItemWrapper>
  );
};
