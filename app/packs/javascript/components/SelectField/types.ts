export interface Option {
  value: any;
  label: string;
}

export interface SelectFieldProps {
  options: Option[];
  value?: any;
  onChange?: (value: any) => void;
}
