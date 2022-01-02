import { Invoice } from '../../models/Invoice'
import { NewInvoicePayload } from '../../hooks/useNewInvoice'

export interface IInvoicesContext {
  invoices: Invoice[];
  loading: boolean;
  resetPagination: () => void;

  saveInvoice: (newInvoicePayload: NewInvoicePayload) => void;
  newInvoice: Invoice;
  loadingNewInvoice: boolean
}
