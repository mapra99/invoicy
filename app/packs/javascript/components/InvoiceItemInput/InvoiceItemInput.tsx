import React, { useEffect, useState } from 'react'
import { InputGroup } from '../InputGroup'
import { InputField } from '../InputField'
import {
  ItemNameWrapper,
  QuantityWrapper,
  PriceWrapper,
  TotalPriceWrapper,
  TotalPriceText,
  DeleteButtonWrapper,
  DeleteButton,
  InvoiceItemInputWrapper
} from './InvoiceItemInput.styled'
import { TrashIcon } from '../../icons/TrashIcon'
import {
  InvoiceItemInputProps,
  InvoiceItemFields
} from './types'
import { round } from '../../utils/round'

export const InvoiceItemInput = ({ invoiceItem, onChange, onRemove, errors }: InvoiceItemInputProps) => {
  const [currentInvoiceItem, setCurrentInvoiceItem] = useState<InvoiceItemFields>(invoiceItem)
  
  const updateInvoiceItem = (event) => {
    const { name, value } = event.target

    setCurrentInvoiceItem({
      ...currentInvoiceItem,
      [name]: value
    })
  }

  useEffect(() => {
    const { price, quantity } = currentInvoiceItem

    const totalPrice = round(price * quantity, 2)
    const updatedCurrentInvoiceItem = {
      ...currentInvoiceItem,
      total_price: round(price * quantity, 2)
    }

    if (onChange) onChange(updatedCurrentInvoiceItem)
    if (totalPrice === currentInvoiceItem.total_price) return

    setCurrentInvoiceItem(updatedCurrentInvoiceItem)
  }, [currentInvoiceItem])

  return (
    <InvoiceItemInputWrapper>
      <ItemNameWrapper>
        <InputGroup
          htmlFor="invoice-item-name"
          label="Item Name"
          error={errors.name}
        >
          <InputField
            id="invoice-item-name"
            name="name"
            type="text"
            value={currentInvoiceItem.name}
            onChange={updateInvoiceItem}
          />
        </InputGroup>
      </ItemNameWrapper>

      <QuantityWrapper>
        <InputGroup
          htmlFor="invoice-item-quantity"
          label="Qty."
          error={errors.quantity}
        >
          <InputField
            id="invoice-item-quantity"
            name="quantity"
            type="text"
            value={currentInvoiceItem.quantity}
            onChange={updateInvoiceItem}
          />
        </InputGroup>
      </QuantityWrapper>

      <PriceWrapper>
        <InputGroup
          label="Price"
          htmlFor="invoice-item-price"
          error={errors.price}
        >
          <InputField
            id="invoice-item-price"
            name="price"
            type="text"
            value={currentInvoiceItem.price}
            onChange={updateInvoiceItem}
          />
        </InputGroup>
      </PriceWrapper>

      <TotalPriceWrapper>
        <InputGroup
          label="Total"
          error={errors.total_price}
        >
          <TotalPriceText as="h4">
            { currentInvoiceItem.total_price }
          </TotalPriceText>
        </InputGroup>
      </TotalPriceWrapper>

      <DeleteButtonWrapper>
        <DeleteButton
          type="button"
          onClick={onRemove}
        >
          <TrashIcon />
        </DeleteButton>
      </DeleteButtonWrapper>
    </InvoiceItemInputWrapper>
  )
}
