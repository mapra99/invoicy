import React from 'react';
import { StatusCardProps } from './types';
import { Text } from '../Text';
import { InvoiceStatus } from '../InvoiceStatus';
import { EditInvoiceButton } from '../EditInvoiceButton';
import { InvoiceMarkAsPaidButton } from '../InvoiceMarkAsPaidButton';
import { DeleteInvoiceButton } from '../DeleteInvoiceButton';
import {
  StatusCardWrapper,
  CurrentStatusWrapper,
  ActionsWrapper,
} from './StatusCard.styled';

export const StatusCard = ({ invoice }: StatusCardProps) => (
  <StatusCardWrapper>
    <CurrentStatusWrapper>
      <Text color="tertiary">
        Status
      </Text>
      <InvoiceStatus status={invoice.status} />
    </CurrentStatusWrapper>

    <ActionsWrapper>
      <EditInvoiceButton invoice={invoice} />

      <DeleteInvoiceButton uuid={invoice.uuid} />

      { invoice.status !== 'paid' && <InvoiceMarkAsPaidButton uuid={invoice.uuid} /> }
    </ActionsWrapper>
  </StatusCardWrapper>
);
