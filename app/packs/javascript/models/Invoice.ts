import { Client } from './Client'
import { Currency } from './Currency'
import { User } from './User'

export interface Invoice {
  id?: string;
  uuid?: string;
  totalPrice?: number;
  dueDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  client?: Client;
  currency?: Currency;
  status?: 'draft' | 'pending' | 'paid';
  user?: User;
}
