import React, { useState, createContext, useEffect } from "react"
import { IInvoicesContext } from './types'
import { Invoice } from '../../models/Invoice';
import { server } from '../../utils/server';
import { ROUTES } from '../../constants';

const { INDEX: INVOICES_INDEX } = ROUTES.API.INVOICES

export const InvoicesContext = createContext<IInvoicesContext | null>(null);

export const InvoicesProvider: React.FC = ({children}) => {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchInvoices = async () => {
    setLoading(true)

    const response = await server.get(INVOICES_INDEX)
    const data = await response.json()
    setInvoices(data)

    setLoading(false)
  }

  useEffect(() => {
    if (invoices.length) return;

    // fetchInvoices()
  }, [])


  const contextVal: IInvoicesContext = {
    invoices,
    loading,
    fetchInvoices
  }

  return (
    <InvoicesContext.Provider value={contextVal}>
      {children}
    </InvoicesContext.Provider>
  )
}
