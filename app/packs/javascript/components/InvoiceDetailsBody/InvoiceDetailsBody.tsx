import React from 'react';
import { useParams } from 'react-router-dom';
import { useInvoiceDetails } from '../../hooks/useInvoiceDetails';
import { EmptyFeedBanner } from '../EmptyFeedBanner';
import { LoadingSpinner } from '../../icons/LoadingSpinner';

export const InvoiceDetailsBody = () => {
  const { uuid } = useParams();
  const { invoice, loading, notFound } = useInvoiceDetails(uuid);

  if (loading) return (<LoadingSpinner />);
  if (notFound) return (<EmptyFeedBanner />);

  return (
    <div>
      {invoice?.totalPrice}
    </div>
  );
};
