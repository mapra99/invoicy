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
}
