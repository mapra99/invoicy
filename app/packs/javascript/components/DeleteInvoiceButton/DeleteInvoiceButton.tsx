import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { DeleteInvoiceButtonProps } from './types';
import { DangerButton } from '../DangerButton';
import { InvoiceDeletionModal } from '../InvoiceDeletionModal';

export const DeleteInvoiceButton = ({ uuid }: DeleteInvoiceButtonProps) => {
  const { modalActive, setModalActive } = useContext(ModalContext);

  return (
    <>
      <DangerButton onClick={() => setModalActive(true)}>
        Delete
      </DangerButton>
      { modalActive && <InvoiceDeletionModal uuid={uuid} /> }
    </>
  );
};
