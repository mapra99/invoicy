import { Invoice } from '../../models/Invoice'
import { NewInvoicePayload } from '../../hooks/useNewInvoice'

export type Status = 'draft' | 'pending' | 'paid'

export interface IInvoicesContext {
  invoices: Invoice[];
  loading: boolean;
  resetPagination: () => void;

  saveInvoice: (newInvoicePayload: NewInvoicePayload) => void;
  newInvoice: Invoice;
  loadingNewInvoice: boolean;

  filterStatuses: Status[];
  setFilterStatuses: (statuses: Status[]) => void;
}
