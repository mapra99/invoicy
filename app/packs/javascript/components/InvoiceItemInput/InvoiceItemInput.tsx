import React from 'react'
import { InputGroup } from '../InputGroup'
import { InputField } from '../InputField'
import {
  QuantityWrapper,
  PriceWrapper,
  TotalPriceWrapper,
  TotalPriceText,
  DeleteButtonWrapper,
  DeleteButton,
  InvoiceItemInputWrapper
} from './InvoiceItemInput.styled'
import { TrashIcon } from '../../icons/TrashIcon'

export const InvoiceItemInput = () => {
  return (
    <InvoiceItemInputWrapper>
      <InputGroup
        htmlFor="invoice-item-name"
        label="Item Name"
      >
        <InputField
          id="invoice-item-name"
          name="invoice_item[name]"
          type="text"
        />
      </InputGroup>

      <QuantityWrapper>
        <InputGroup
          htmlFor="invoice-item-quantity"
          label="Qty."
        >
          <InputField
            id="invoice-item-quantity"
            name="invoice_item[quantity]"
            type="number"
          />
        </InputGroup>
      </QuantityWrapper>

      <PriceWrapper>
        <InputGroup
          label="Price"
          htmlFor="invoice-item-price"
        >
          <InputField
            id="invoice-item-price"
            name="invoice_item[price]"
            type="text"
          />
        </InputGroup>
      </PriceWrapper>

      <TotalPriceWrapper>
        <InputGroup
          label="Total"
        >
          <TotalPriceText as="h4">
            150.00
          </TotalPriceText>
        </InputGroup>
      </TotalPriceWrapper>

      <DeleteButtonWrapper>
        <DeleteButton>
          <TrashIcon />
        </DeleteButton>
      </DeleteButtonWrapper>
    </InvoiceItemInputWrapper>
  )
}
