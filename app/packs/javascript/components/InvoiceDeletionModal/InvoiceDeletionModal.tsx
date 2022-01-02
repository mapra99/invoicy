import React, { useContext } from 'react';
import { InvoiceDeletionModalProps } from './types';
import { ModalContext } from '../../contexts/ModalContext'
import { Modal } from '../Modal';
import { SecondaryButton } from '../SecondaryButton';
import { DangerButton } from '../DangerButton';
import {
  ModalWrapper,
  ModalCard,
  ModalTitle,
  ModalText,
  ActionsWrapper,
} from './InvoiceDeletionModal.styled';

export const InvoiceDeletionModal = ({ uuid }: InvoiceDeletionModalProps) => {
  const { setModalActive } = useContext(ModalContext);

  return (
    <Modal>
      <ModalWrapper>
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
            <SecondaryButton onClick={() => setModalActive(false)}>
              Cancel
            </SecondaryButton>
            <DangerButton>
              Delete
            </DangerButton>
          </ActionsWrapper>
        </ModalCard>
      </ModalWrapper>
    </Modal>
  )
}
