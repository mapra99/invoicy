import React from 'react';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import { useModal } from '../../../hooks/useModal';
import { GoBackButton } from '../../../components/GoBackButton';
import { Title } from '../../../components/Title';
import { InvoiceForm } from '../../../components/InvoiceForm';
import { Modal } from '../../../components/Modal';
import {
  NewInvoiceContainer,
  NewInvoiceHeading,
} from './NewInvoice.styled';

const NewInvoiceContent = () => (
  <NewInvoiceContainer>
    <GoBackButton />
    <NewInvoiceHeading>
      <Title>
        New Invoice
      </Title>
    </NewInvoiceHeading>

    <InvoiceForm />
  </NewInvoiceContainer>
);

export const NewInvoice = () => {
  const { mobile } = useBreakpoint();
  const { open } = useModal(true);

  if (mobile) return <NewInvoiceContent />;

  return (
    <Modal open={open}>
      <NewInvoiceContent />
    </Modal>
  );
};
