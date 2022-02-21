import React from 'react';
import { useParams } from 'react-router-dom';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import { useInvoiceDetails } from '../../../hooks/useInvoiceDetails';
import { useModal } from '../../../hooks/useModal';
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

    <InvoiceForm invoice={invoice} />
  </EditInvoiceContainer>
);

export const EditInvoice = () => {
  const { mobile } = useBreakpoint();
  const { uuid } = useParams();
  const { invoice, loading, notFound } = useInvoiceDetails({ uuid, isPublic: false });
  const { open } = useModal(true);

  if (loading) return <LoadingSpinner />;
  if (notFound) return <EmptyFeedBanner />;
  if (!invoice) return null;

  if (mobile) return <EditInvoiceContent invoice={invoice} />;

  return (
    <Modal open={open}>
      <EditInvoiceContent invoice={invoice} />
    </Modal>
  );
};
