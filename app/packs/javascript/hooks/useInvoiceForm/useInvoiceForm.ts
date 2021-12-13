import { useState, useEffect } from 'react'
import {
  NewInvoicePayload,
  NewInvoiceItemPayload,
  UserLocationPayload,
  ClientPayload,
  PaymentTermsOption
} from './types'

export const useInvoiceForm = () => {
  const today = new Date();

  const itemPayload: NewInvoiceItemPayload = {
    name: "",
    quantity: 0,
    price: 0,
    total_price: 0
  }

  const userLocationPayload: UserLocationPayload = {
    street_address: "",
    city: "",
    postcode: "",
    country: ""
  }

  const clientPayload: ClientPayload = {
    name: "",
    email: "",
    location: {
      street_address: "",
      city: "",
      postcode: "",
      country: ""
    }
  }

  const basePayload: NewInvoicePayload = {
    user_location: userLocationPayload,
    client: clientPayload,
    issue_date: today,
    payment_terms: 0,
    project_description: "",
    items_list: [itemPayload]
  }

  const paymentTermsOptions: PaymentTermsOption[] = [
    { value: 0, label: "Inmediate" },
    { value: 10, label: "Next 10 Days" },
    { value: 30, label: "Next 30 Days" },
    { value: 60, label: "Next 60 Days" }
  ]

  const [newInvoicePayload, setNewInvoicePayload] = useState<NewInvoicePayload>(basePayload)
  const [userLocation, setUserLocation] = useState<UserLocationPayload>(userLocationPayload)
  const [client, setClient] = useState<ClientPayload>(clientPayload)
  const [invoiceItems, setInvoiceItems] = useState<NewInvoiceItemPayload[]>([itemPayload])

  useEffect(() => {
    setNewInvoicePayload({
      ...newInvoicePayload,
      client,
      user_location: userLocation,
      items_list: invoiceItems
    })
  }, [userLocation, client, invoiceItems])

  useEffect(() => {
    console.log(newInvoicePayload)
  }, [newInvoicePayload])

  const onUserLocationChange = (event) => {
    const { name, value } = event.target
    setUserLocation({
      ...userLocation,
      [name]: value
    })
  }

  const onClientDetailsChange = (event) => {
    const { name, value } = event.target
    setClient({
      ...client,
      [name]: value
    })
  }

  const onClientLocationChange = (event) => {
    const { name, value } = event.target
    setClient({
      ...client,
      location: {
        ...client.location,
        [name]: value
      }
    })
  }

  const onInvoiceDetailsChange = (event) => {
    const { name, value } = event.target
    setNewInvoicePayload({
      ...newInvoicePayload,
      [name]: value
    })
  }

  const onInvoiceItemChange = (invoiceItem: NewInvoiceItemPayload, index: number) => {
    const updatedInvoiceItems = [...invoiceItems]
    updatedInvoiceItems[index] = invoiceItem

    setInvoiceItems(updatedInvoiceItems)
  }

  const onInvoiceItemRemove = (index: number) => {
    const updatedInvoiceItems = [...invoiceItems]
    updatedInvoiceItems.splice(index, 1)

    setInvoiceItems(updatedInvoiceItems)
  }

  const addNewInvoiceItem = () => {
    setInvoiceItems([
      ...invoiceItems,
      itemPayload
    ])
  }

  return {
    newInvoicePayload,
    paymentTermsOptions,
    onUserLocationChange,
    onClientDetailsChange,
    onClientLocationChange,
    onInvoiceDetailsChange,
    onInvoiceItemChange,
    onInvoiceItemRemove,
    addNewInvoiceItem
  }
}