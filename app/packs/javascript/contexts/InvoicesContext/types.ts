import { Invoice } from '../../models/Invoice'

export interface IInvoicesContext {
  invoices: Invoice[];
  loading: boolean;
}
