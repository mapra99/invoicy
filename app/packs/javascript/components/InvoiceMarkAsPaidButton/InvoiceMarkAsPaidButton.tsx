import React from 'react';
import { PrimaryButton } from '../PrimaryButton';
import { LoadingSpinner } from '../../icons/LoadingSpinner';
import { InvoiceMarkAsPaidButtonProps } from './types';
import { useInvoiceStatusUpdate } from '../../hooks/useInvoiceStatusUpdate';

const PAID_STATUS = 'paid';

export const InvoiceMarkAsPaidButton = ({ uuid }: InvoiceMarkAsPaidButtonProps) => {
  const { updateStatus, loading } = useInvoiceStatusUpdate();
  const handleClick = async () => {
    await updateStatus(uuid, PAID_STATUS);
    window.location.reload();
  };

  return (
    <PrimaryButton onClick={handleClick} disabled={loading}>
      { loading ? <LoadingSpinner color="white" style={{ height: '100%' }} /> : 'Mark as Paid' }
    </PrimaryButton>
  );
};
