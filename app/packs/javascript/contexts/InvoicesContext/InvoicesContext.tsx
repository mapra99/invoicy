import React, { useState, useEffect, createContext } from 'react';
import { IInvoicesContext, Status } from './types';
import { Invoice } from '../../models/Invoice';
import { ROUTES } from '../../constants';
import { usePagination } from '../../hooks/usePagination';
import { server } from '../../utils/server';

const {
  INDEX: INVOICES_INDEX,
  CREATE: CREATE_INVOICE,
} = ROUTES.API.INVOICES;

export const InvoicesContext = createContext<IInvoicesContext | null>(null);

export const InvoicesProvider: React.FC = ({ children }) => {
  const [filterStatuses, setFilterStatuses] = useState<Status[]>(['draft', 'pending', 'paid']);
  const {
    data: invoices,
    loading,
    resetPagination,
  } = usePagination<Invoice>({ url: INVOICES_INDEX, limit: 10 });
  const [newInvoice, setNewInvoice] = useState<Invoice | null>(null);
  const [loadingNewInvoice, setLoadingNewInvoice] = useState<boolean>(false);

  const saveInvoice = async (newInvoicePayload, status = 'pending') => {
    setLoadingNewInvoice(true);

    const response = await server.post(CREATE_INVOICE, { ...newInvoicePayload, status });
    const data = await response.json();

    setNewInvoice(data);
    setLoadingNewInvoice(false);
    resetPagination();
  };

  useEffect(() => {
    console.log(filterStatuses)
  }, [filterStatuses]);

  const contextVal: IInvoicesContext = {
    invoices,
    loading,
    resetPagination,

    saveInvoice,
    newInvoice,
    loadingNewInvoice,

    filterStatuses,
    setFilterStatuses
  };

  return (
    <InvoicesContext.Provider value={contextVal}>
      {children}
    </InvoicesContext.Provider>
  );
};
