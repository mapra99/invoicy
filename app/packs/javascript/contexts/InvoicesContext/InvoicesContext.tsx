import React, { createContext } from "react"
import { IInvoicesContext } from './types'
import { Invoice } from '../../models/Invoice';
import { ROUTES } from '../../constants';
import { usePagination } from '../../hooks/usePagination'

const { INDEX: INVOICES_INDEX } = ROUTES.API.INVOICES

export const InvoicesContext = createContext<IInvoicesContext | null>(null);

export const InvoicesProvider: React.FC = ({children}) => {
  const {
    data: invoices,
    loading
  } = usePagination<Invoice>({url: INVOICES_INDEX, limit: 10 })

  const contextVal: IInvoicesContext = {
    invoices,
    loading
  }

  return (
    <InvoicesContext.Provider value={contextVal}>
      {children}
    </InvoicesContext.Provider>
  )
}
