export interface CheckboxProps {
  value: string;
  name: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
