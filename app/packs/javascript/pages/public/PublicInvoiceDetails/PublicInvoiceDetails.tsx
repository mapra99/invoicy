import React from 'react';
import { useParams } from 'react-router-dom';
import { MainContainer } from '../../../components/MainContainer';
import { EmptyFeedBanner } from '../../../components/EmptyFeedBanner';
import { InvoiceDetailsCard } from '../../../components/InvoiceDetailsCard';
import { LoadingSpinner } from '../../../icons/LoadingSpinner';
import { useInvoiceDetails } from '../../../hooks/useInvoiceDetails';

export const PublicInvoiceDetails = () => {
  const { externalId } = useParams();
  const { invoice, loading, notFound } = useInvoiceDetails({ externalId, isPublic: true });

  return (
    <MainContainer>
      { loading && <LoadingSpinner /> }
      { notFound && <EmptyFeedBanner /> }
      { invoice && <InvoiceDetailsCard invoice={invoice} /> }
    </MainContainer>
  );
};
