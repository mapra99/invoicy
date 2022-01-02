import React from 'react';
import { StatusCardProps } from './types';
import { Text } from '../Text';
import { InvoiceStatus } from '../InvoiceStatus';
import { SecondaryButton } from '../SecondaryButton';
import { PrimaryButton } from '../PrimaryButton';
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
      <SecondaryButton>
        Edit
      </SecondaryButton>

      <DeleteInvoiceButton uuid={invoice.uuid} />

      <PrimaryButton>
        Mark as Paid
      </PrimaryButton>
    </ActionsWrapper>
  </StatusCardWrapper>
);
