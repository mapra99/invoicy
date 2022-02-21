import { Client } from './Client';
import { Currency } from './Currency';
import { User } from './User';
import { InvoiceItem } from './InvoiceItem';

export type Status = 'draft' | 'pending' | 'paid'
export interface Invoice {
  id?: string;
  uuid?: string;
  name?: string;
  issueDate?: Date;
  dueDate?: Date;
  totalPrice?: number;
  status?: Status;
  client?: Client;
  user?: User;
  currency?: Currency;
  createdAt?: Date;
  updatedAt?: Date;
  items?: InvoiceItem[]
}
