import { InvoiceItem } from '../../models/InvoiceItem';
import { Currency } from '../../models/Currency';

export interface InvoiceItemsListProps {
  items: InvoiceItem[],
  totalPrice: number,
  currency: Currency
}
