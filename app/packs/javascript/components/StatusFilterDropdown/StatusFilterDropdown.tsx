import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';
import {
  StatusFilterDropdownCard,
} from './StatusFilterDropdown.styled';
import { StatusFilterDropdownProps } from './types';

export const StatusFilterDropdown = ({ statuses, onChange }: StatusFilterDropdownProps) => {
  const [statusChecks, setStatusChecks] = useState(statuses);

  const handleChange = (index: number, checked: boolean) => {
    const newStatuses = [...statusChecks];
    newStatuses[index].checked = checked;

    setStatusChecks(newStatuses);
    onChange(newStatuses);
  };

  return (
    <StatusFilterDropdownCard>
      { statuses.map((status, index) => (
        <Checkbox
          key={status.value}
          name="status"
          value={status.value}
          label={status.label}
          checked={status.checked}
          onChange={(checked) => { handleChange(index, checked); }}
        />
      ))}
    </StatusFilterDropdownCard>
  );
};

StatusFilterDropdown.defaultProps = {
  statuses: [{
    label: 'Draft',
    value: 'draft',
    checked: false,
  }, {
    label: 'Pending',
    value: 'pending',
    checked: false,
  }, {
    label: 'Paid',
    value: 'paid',
    checked: false,
  }],
};
