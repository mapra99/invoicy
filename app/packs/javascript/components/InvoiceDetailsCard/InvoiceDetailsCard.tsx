import React from 'react';
import { InvoiceDetailsCardProps } from './types';
import { formatDate } from '../../utils/formatDate';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { InvoiceUuid } from '../InvoiceUuid';
import { Text } from '../Text';
import { LocationDetails } from '../LocationDetails';
import { InvoiceAttribute } from '../InvoiceAttribute';
import {
  InvoiceDetailsCardWrapper,
  InvoiceNameWrapper,
  HeadingWrapper,
  ClientDetailsWrapper,
  DetailsRow,
  DatesWrapper,
  TargetEmailWrapper
} from './InvoiceDetailsCard.styled';

export const InvoiceDetailsCard = ({ invoice }: InvoiceDetailsCardProps) => {
  const {
    uuid, name, user, client, issueDate, dueDate,
  } = invoice;
  const { mobile } = useBreakpoint();

  return (
    <InvoiceDetailsCardWrapper>
      <HeadingWrapper>
        <InvoiceNameWrapper>
          <InvoiceUuid as={mobile ? 'h4' : 'h3'}>
            { uuid }
          </InvoiceUuid>
          <Text color="tertiary">
            { name }
          </Text>
        </InvoiceNameWrapper>

        <LocationDetails
          location={user.location}
          align={mobile ? 'start' : 'end'}
        />
      </HeadingWrapper>

      <DetailsRow>
        <DatesWrapper>
          <InvoiceAttribute
            label="Invoice Date"
            value={formatDate(issueDate)}
          />

          <InvoiceAttribute
            label="Payment Due"
            value={formatDate(dueDate)}
          />
        </DatesWrapper>

        <ClientDetailsWrapper>
          <InvoiceAttribute
            label="Bill To"
            value={client.name}
          />

          <LocationDetails location={client.location} />
        </ClientDetailsWrapper>

        <TargetEmailWrapper>
          <InvoiceAttribute
            label="Sent to"
            value={client.email}
          />
        </TargetEmailWrapper>
      </DetailsRow>
    </InvoiceDetailsCardWrapper>
  );
};
