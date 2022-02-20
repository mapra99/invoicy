import React from 'react';
import { useParams } from 'react-router-dom';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import { useInvoiceDetails } from '../../../hooks/useInvoiceDetails';
import { GoBackButton } from '../../../components/GoBackButton';
import { Title } from '../../../components/Title';
import { InvoiceForm } from '../../../components/InvoiceForm';
import { Modal } from '../../../components/Modal';
import { LoadingSpinner } from '../../../icons/LoadingSpinner';
import { EmptyFeedBanner } from '../../../components/EmptyFeedBanner';
import {
  EditInvoiceContainer,
  EditInvoiceHeading,
} from './EditInvoice.styled';
import { EditInvoiceProps } from './types';

const EditInvoiceContent = ({ invoice }: EditInvoiceProps) => (
  <EditInvoiceContainer>
    <GoBackButton />
    <EditInvoiceHeading>
      <Title>
        Edit #
        {invoice.uuid}
      </Title>
    </EditInvoiceHeading>

    <InvoiceForm />
  </EditInvoiceContainer>
);

export const EditInvoice = () => {
  const { mobile } = useBreakpoint();
  const { uuid } = useParams();
  const { invoice, loading, notFound } = useInvoiceDetails({ uuid, isPublic: false });

  if (loading) return <LoadingSpinner />;
  if (notFound) return <EmptyFeedBanner />;
  if (mobile) return <EditInvoiceContent invoice={invoice} />;

  return (
    <Modal>
      <EditInvoiceContent invoice={invoice} />
    </Modal>
  );
};
