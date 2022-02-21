import React, { useState, useEffect, createContext } from 'react';
import { IInvoicesContext } from './types';
import { Invoice, Status } from '../../models/Invoice';
import { ROUTES } from '../../constants';
import { usePagination } from '../../hooks/usePagination';
import { server } from '../../utils/server';
import { replaceParams } from '../../utils/url';

const {
  INDEX: INVOICES_INDEX,
  CREATE: CREATE_INVOICE,
  UPDATE: UPDATE_INVOICE,
} = ROUTES.API.INVOICES;

export const InvoicesContext = createContext<IInvoicesContext | null>(null);

export const InvoicesProvider: React.FC = ({ children }) => {
  const [filterStatuses, setFilterStatuses] = useState<Status[]>(['draft', 'pending', 'paid']);
  const {
    data: invoices,
    loading,
    resetPagination,
    setUrl,
  } = usePagination<Invoice>({ initialUrl: INVOICES_INDEX, limit: 10 });
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

  const updateInvoice = async (invoice, invoicePayload, status = 'pending') => {
    setLoadingNewInvoice(true);

    const url = replaceParams(UPDATE_INVOICE, { uuid: invoice.uuid });
    const response = await server.put(url, { ...invoicePayload, status });
    const data = await response.json();

    setLoadingNewInvoice(false);
    resetPagination();
    return data;
  };

  useEffect(() => {
    const filterUrl = `${INVOICES_INDEX}?status=${filterStatuses.join(',')}`;
    setUrl(filterUrl);
  }, [filterStatuses]);

  const contextVal: IInvoicesContext = {
    invoices,
    loading,
    resetPagination,

    saveInvoice,
    newInvoice,
    loadingNewInvoice,

    filterStatuses,
    setFilterStatuses,

    updateInvoice,
  };

  return (
    <InvoicesContext.Provider value={contextVal}>
      {children}
    </InvoicesContext.Provider>
  );
};
