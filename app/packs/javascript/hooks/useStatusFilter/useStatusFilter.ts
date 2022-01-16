import { useContext } from 'react';
import { InvoicesContext } from '../../contexts/InvoicesContext';

export const useStatusFilter = () => {
  const { filterStatuses, setFilterStatuses } = useContext(InvoicesContext);
  const statusesDetails = [{
    label: 'Draft',
    value: 'draft',
    checked: filterStatuses.includes('draft'),
  }, {
    label: 'Pending',
    value: 'pending',
    checked: filterStatuses.includes('pending'),
  }, {
    label: 'Paid',
    value: 'paid',
    checked: filterStatuses.includes('paid'),
  }];

  const handleChange = (statuses) => {
    const selectedStatuses = statuses
      .filter((status) => status.checked)
      .map((status) => status.value);

    setFilterStatuses(selectedStatuses);
  };

  return {
    statusesDetails,
    handleChange,
  };
};
