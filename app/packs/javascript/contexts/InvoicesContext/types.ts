import { Invoice } from '../../models/Invoice'

export interface IInvoicesContext {
  invoices: Invoice[];
  fetchInvoices: () => void;
  loading: boolean;
}
