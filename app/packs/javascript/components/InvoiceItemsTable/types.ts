import { InvoiceItem } from '../../models/InvoiceItem';
import { Currency } from '../../models/Currency';

export interface InvoiceItemsTableProps {
  items: InvoiceItem[],
  totalPrice: number,
  currency: Currency
}
