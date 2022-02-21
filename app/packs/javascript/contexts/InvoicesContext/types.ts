import { Invoice, Status } from '../../models/Invoice';
import { NewInvoicePayload } from '../../hooks/useInvoiceForm';

export interface IInvoicesContext {
  invoices: Invoice[];
  loading: boolean;
  resetPagination: () => void;

  saveInvoice: (newInvoicePayload: NewInvoicePayload, status: Status) => void;
  newInvoice: Invoice;
  loadingNewInvoice: boolean;

  filterStatuses: Status[];
  setFilterStatuses: (statuses: Status[]) => void;

  updateInvoice: (invoice: Invoice, invoicePayload: NewInvoicePayload, status: Status) => void;
}
