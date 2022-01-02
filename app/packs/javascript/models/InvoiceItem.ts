import { Currency } from './Currency';

export interface InvoiceItem {
  name?: string;
  quantity?: number;
  fixedUnitPrice?: number;
  totalPrice?: number;
  currency?: Currency;
}
