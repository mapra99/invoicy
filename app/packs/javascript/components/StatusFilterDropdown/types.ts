interface StatusDropdownParams {
  label: string;
  value: string;
  checked: boolean;
}

export interface StatusFilterDropdownProps {
  statuses?: StatusDropdownParams[];
  onChange?: (statusChecks: StatusDropdownParams[]) => void;
}
