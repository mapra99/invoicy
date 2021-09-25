import { Client } from './Client'
import { Currency } from './Currency'

export interface Invoice {
  id: string;
  uuid: string;
  totalPrice: number;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  client: Client;
  currency: Currency;
  status: 'draft' | 'pending' | 'paid';
}
