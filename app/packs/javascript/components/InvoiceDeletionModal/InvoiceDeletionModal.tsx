import React from 'react';
import { Redirect } from 'react-router-dom';
import { InvoiceDeletionModalProps } from './types';
import { ROUTES } from '../../constants';
import { useInvoiceDeletion } from '../../hooks/useInvoiceDeletion';
import { Modal } from '../Modal';
import { Text } from '../Text';
import { SecondaryButton } from '../SecondaryButton';
import { DangerButton } from '../DangerButton';
import {
  ModalWrapper,
  ModalCard,
  ModalTitle,
  ModalText,
  ActionsWrapper,
} from './InvoiceDeletionModal.styled';

const { INVOICES_INDEX } = ROUTES.DASHBOARD;

export const InvoiceDeletionModal = ({ uuid, open, onClose }: InvoiceDeletionModalProps) => {
  const {
    loading, error, invoiceDeleted, deleteInvoice,
  } = useInvoiceDeletion(uuid);

  if (invoiceDeleted) return <Redirect to={INVOICES_INDEX} />;

  return (
    <Modal open={open}>
      <ModalWrapper className={loading ? 'loading' : ''}>
        <ModalCard>
          <ModalTitle as="h2">
            Confirm Deletion
          </ModalTitle>

          <ModalText color="tertiary" type="body1">
            Are you sure you want to delete invoice #
            { uuid }
            ? This action cannot be undone.
          </ModalText>

          <ActionsWrapper>
            <SecondaryButton onClick={onClose} disabled={loading}>
              Cancel
            </SecondaryButton>
            <DangerButton onClick={deleteInvoice} disabled={loading}>
              Delete
            </DangerButton>
          </ActionsWrapper>
          { error && (
            <Text color="danger" align="right">
              An error has occurred. Please try again later
            </Text>
          )}
        </ModalCard>
      </ModalWrapper>
    </Modal>
  );
};
