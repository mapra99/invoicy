import { useEffect, useState } from 'react';
import { replaceParams } from '../../utils/url';
import { server } from '../../utils/server';
import { Invoice } from '../../models/Invoice';
import { ROUTES } from '../../constants';
import { RequestError } from '../../errors'

const { SHOW: SHOW_INVOICE } = ROUTES.API.INVOICES;

export const useInvoiceDetails = (uuid: string) => {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  const fetchInvoice = async () => {
    const url = replaceParams(SHOW_INVOICE, { uuid });

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
    notFound
  };
};
