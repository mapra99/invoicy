export interface InvoiceItemErrors {
  name: string;
  quantity: string;
  price: string;
  total_price: string;
}

export interface InvoiceItemFields {
  name: string;
  quantity: number;
  price: number;
  total_price: number;
}

export interface InvoiceItemInputProps {
  invoiceItem: InvoiceItemFields;
  onChange?: (invoiceItem: InvoiceItemFields) => void;
  onRemove?: () => void;
  errors?: InvoiceItemErrors;
}
