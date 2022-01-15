import React from 'react';
import { Checkbox } from '../Checkbox';
import {
  StatusFilterDropdownCard,
} from './StatusFilterDropdown.styled';

export const StatusFilterDropdown = () => (
  <StatusFilterDropdownCard>
    <Checkbox name="status" value="draft" label="Draft" />
    <Checkbox name="status" value="pending" label="Pending" />
    <Checkbox name="status" value="paid" label="Paid" />
  </StatusFilterDropdownCard>
);
