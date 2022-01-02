import React from 'react';
import { useParams } from 'react-router-dom';
import { useInvoiceDetails } from '../../hooks/useInvoiceDetails';
import { EmptyFeedBanner } from '../EmptyFeedBanner';
import { LoadingSpinner } from '../../icons/LoadingSpinner';
import { GoBackButton } from '../GoBackButton';
import { StatusCard } from '../StatusCard';
import { InvoiceDetailsCard } from '../InvoiceDetailsCard';
import {
  InvoiceDetailsWrapper,
  StatusCardWrapper,
} from './InvoiceDetailsBody.styled';

export const InvoiceDetailsBody = () => {
  const { uuid } = useParams();
  const { invoice, loading, notFound } = useInvoiceDetails(uuid);

  if (loading) return (<LoadingSpinner />);
  if (notFound) return (<EmptyFeedBanner />);
  if (!invoice) return null;

  return (
    <InvoiceDetailsWrapper>
      <GoBackButton />
      <StatusCardWrapper>
        <StatusCard invoice={invoice} />
      </StatusCardWrapper>
      <InvoiceDetailsCard invoice={invoice} />
    </InvoiceDetailsWrapper>
  );
};
