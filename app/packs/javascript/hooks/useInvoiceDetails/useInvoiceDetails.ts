import { useEffect, useState } from 'react';
import { replaceParams } from '../../utils/url';
import { server } from '../../utils/server';
import { Invoice } from '../../models/Invoice';
import { ROUTES } from '../../constants';
import { RequestError } from '../../errors';
import { UseInvoiceDetailsParams } from './types';

const PRIVATE_INVOICE_URL = ROUTES.API.INVOICES.SHOW;
const PUBLIC_INVOICE_URL = ROUTES.API.PUBLIC.INVOICES.SHOW;

export const useInvoiceDetails = ({ uuid, externalId, isPublic }: UseInvoiceDetailsParams) => {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  const fetchInvoice = async () => {
    let url = '';
    if (isPublic) {
      url = replaceParams(PUBLIC_INVOICE_URL, { externalId });
    } else {
      url = replaceParams(PRIVATE_INVOICE_URL, { uuid });
    }

    try {
      setLoading(true);
      const response = await server.get(url);
      const data = await response.json();
      setInvoice(data);
    } catch (err) {
      if (err instanceof RequestError && err.status === 404) {
        setNotFound(true);
      } else {
        throw err;
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoice();
  }, []);

  return {
    loading,
    invoice,
    fetchInvoice,
    notFound,
  };
};
