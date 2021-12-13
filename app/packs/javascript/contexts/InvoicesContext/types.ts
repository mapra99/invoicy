import { Invoice } from '../../models/Invoice'
import { NewInvoicePayload } from '../../hooks/useNewInvoice'

export interface IInvoicesContext {
  invoices: Invoice[];
  loading: boolean;

  saveInvoice: (newInvoicePayload: NewInvoicePayload) => void;
  newInvoice: Invoice;
  loadingNewInvoice: boolean
}
