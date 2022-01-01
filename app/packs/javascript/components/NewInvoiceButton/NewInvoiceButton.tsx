import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PrimaryButton } from '../PrimaryButton';
import { PlusIcon } from '../../icons/PlusIcon';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { ROUTES } from '../../constants';

const { DASHBOARD: DASHBOARD_ROUTES } = ROUTES;

export const NewInvoiceButton = () => {
  const { mobile } = useBreakpoint();
  const location = useLocation();

  return (
    <Link
      to={{
        pathname: DASHBOARD_ROUTES.NEW_INVOICE,
        state: { background: location },
      }}
    >
      <PrimaryButton icon={<PlusIcon />}>
        { mobile ? 'New' : 'New Invoice' }
      </PrimaryButton>
    </Link>
  );
};
