import React from 'react';
import { InvoiceStatusProps } from './types';
import {
  StyledInvoiceStatus,
  InvoiceStatusText,
  InvoiceStatusOverlay,
} from './InvoiceStatus.styled';
import { capitalize } from '../../utils/capitalize';

export const InvoiceStatus = ({ status }: InvoiceStatusProps) => (
  <StyledInvoiceStatus>
    <InvoiceStatusOverlay className={status} />
    <InvoiceStatusText as="h4" className={status}>
      { capitalize(status) }
    </InvoiceStatusText>
  </StyledInvoiceStatus>
);
