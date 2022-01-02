import { Client } from './Client';
import { Currency } from './Currency';
import { User } from './User';
import { Item } from './Item';

export interface Invoice {
  id?: string;
  uuid?: string;
  name?: string;
  issueDate?: Date;
  dueDate?: Date;
  totalPrice?: number;
  status?: 'draft' | 'pending' | 'paid';
  client?: Client;
  user?: User;
  currency?: Currency;
  createdAt?: Date;
  updatedAt?: Date;
  items?: Item[]
}
