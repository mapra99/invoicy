import { useState } from 'react';
import { replaceParams } from '../../utils/url';
import { server } from '../../utils/server';
import { ROUTES } from '../../constants';

const { UPDATE_STATUS: UPDATE_STATUS_URL } = ROUTES.API.INVOICES;

export const useInvoiceStatusUpdate = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<boolean>(false);

  const { patch } = server;

  const updateStatus = async (uuid: string, status: string) => {
    const url = replaceParams(UPDATE_STATUS_URL, { uuid });

    setLoading(true);
    try {
      const response = await patch(url, { status });
      const data = await response.json();

      return data;
    } catch (err) {
      setErrors(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    updateStatus,
    loading,
    errors,
  };
};
