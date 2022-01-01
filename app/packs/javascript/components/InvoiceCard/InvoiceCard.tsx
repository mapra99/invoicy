import React from 'react';
import { InvoiceCardProps } from './types';
import {
  InvoiceLink,
  InvoiceUuid,
  InvoiceClient,
  InvoiceDueDate,
  InvoicePrice,
  InvoiceDueDatePriceWrapper,
  InvoiceCardChevronIconWrapper,
} from './InvoiceCard.styled';
import { Card } from '../Card';
import { InvoiceStatus } from '../InvoiceStatus';
import { ChevronIcon } from '../../icons/ChevronIcon';
import { formatDate } from '../../utils/formatDate';
import { formatCurrency } from '../../utils/formatCurrency';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { ROUTES } from '../../constants';
import { replaceParams } from '../../utils/url';

const { SHOW_INVOICE } = ROUTES.DASHBOARD;

export const InvoiceCard = ({ invoice }: InvoiceCardProps) => {
  const { mobile } = useBreakpoint();

  return (
    <InvoiceLink to={replaceParams(SHOW_INVOICE, { uuid: invoice.uuid })}>
      <Card>
        <InvoiceUuid as="h4">
          {invoice.uuid}
        </InvoiceUuid>

        { !mobile && (
          <InvoiceDueDate className="desktop">
            Due
            {' '}
            { formatDate(invoice.dueDate) }
          </InvoiceDueDate>
        ) }

        <InvoiceClient>
          { invoice.client.name }
        </InvoiceClient>

        <InvoiceDueDatePriceWrapper>
          { mobile && (
            <InvoiceDueDate className="mobile">
              Due
              {' '}
              { formatDate(invoice.dueDate) }
            </InvoiceDueDate>
          ) }

          <InvoicePrice as="h4">
            { formatCurrency(invoice.totalPrice, invoice.currency) }
          </InvoicePrice>
        </InvoiceDueDatePriceWrapper>

        <InvoiceStatus status={invoice.status} />

        { !mobile && (
          <InvoiceCardChevronIconWrapper>
            <ChevronIcon />
          </InvoiceCardChevronIconWrapper>
        ) }
      </Card>
    </InvoiceLink>
  );
};
