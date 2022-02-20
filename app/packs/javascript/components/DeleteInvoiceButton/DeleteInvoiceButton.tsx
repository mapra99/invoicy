import React from 'react';
import { useModal } from '../../hooks/useModal';
import { DeleteInvoiceButtonProps } from './types';
import { DangerButton } from '../DangerButton';
import { InvoiceDeletionModal } from '../InvoiceDeletionModal';

export const DeleteInvoiceButton = ({ uuid }: DeleteInvoiceButtonProps) => {
  const { open, toggleModal } = useModal();

  return (
    <>
      <DangerButton onClick={toggleModal}>
        Delete
      </DangerButton>
      <InvoiceDeletionModal uuid={uuid} open={open} onClose={toggleModal} />
    </>
  );
};
