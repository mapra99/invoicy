import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SecondaryButton } from '../SecondaryButton';
import { ROUTES } from '../../constants';
import { replaceParams } from '../../utils/url';
import { EditInvoiceButtonProps } from './types';

const { DASHBOARD: DASHBOARD_ROUTES } = ROUTES;

export const EditInvoiceButton = ({ invoice }: EditInvoiceButtonProps) => {
  const location = useLocation();

  const { uuid } = invoice;
  const url = replaceParams(DASHBOARD_ROUTES.EDIT_INVOICE, { uuid });

  if (invoice.status !== 'draft') return null;

  return (
    <Link
      to={{
        pathname: url,
        state: { background: location },
      }}
    >
      <SecondaryButton>
        Edit
      </SecondaryButton>
    </Link>
  );
};
