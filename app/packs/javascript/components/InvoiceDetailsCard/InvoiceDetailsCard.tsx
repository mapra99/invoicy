import React from 'react';
import { InvoiceDetailsCardProps } from './types';
import { InvoiceUuid } from '../InvoiceUuid';
import { Text } from '../Text';
import { LocationDetails } from '../LocationDetails';
import {
  InvoiceDetailsCardWrapper,
} from './InvoiceDetailsCard.styled';

export const InvoiceDetailsCard = ({ invoice }: InvoiceDetailsCardProps) => {
  const { uuid, name, user } = invoice;

  return (
    <InvoiceDetailsCardWrapper>
      <InvoiceUuid as="h4">
        { uuid }
      </InvoiceUuid>
      <Text color="tertiary">
        { name }
      </Text>

      <LocationDetails location={user.location} />
    </InvoiceDetailsCardWrapper>
  );
};
