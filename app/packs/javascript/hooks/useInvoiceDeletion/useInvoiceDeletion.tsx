import { useState, useContext } from 'react';
import { InvoicesContext } from '../../contexts/InvoicesContext';
import { replaceParams } from '../../utils/url';
import { server } from '../../utils/server';
import { ROUTES } from '../../constants';

const { DESTROY: DESTROY_ROUTE } = ROUTES.API.INVOICES;

export const useInvoiceDeletion = (uuid: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [invoiceDeleted, setInvoiceDeleted] = useState<boolean>(false);
  const { resetPagination } = useContext(InvoicesContext);

  const { delete: deleteRequest } = server;

  const deleteInvoice = async () => {
    const url = replaceParams(DESTROY_ROUTE, { uuid });

    setLoading(true);
    try {
      await deleteRequest(url);
      setInvoiceDeleted(true);
      resetPagination();
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    invoiceDeleted,
    deleteInvoice,
  };
};
