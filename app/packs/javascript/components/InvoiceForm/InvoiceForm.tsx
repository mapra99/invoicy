import React from 'react'
import { useHistory } from 'react-router-dom'
import { useInvoiceForm } from '../../hooks/useInvoiceForm'
import { InputGroup } from '../InputGroup'
import { InputField } from '../InputField'
import { DatePickerField } from '../DatePickerField'
import { SelectField } from '../SelectField'
import { InvoiceItemInput } from '../InvoiceItemInput'
import { PrimaryButton } from '../PrimaryButton'
import { SecondaryButton } from '../SecondaryButton'
import { TertiaryButton } from '../TertiaryButton'
import {
  InvoiceFormWrapper,
  InvoiceFormSectionTitle,
  CityWrapper,
  PostcodeWrapper,
  CountryWrapper,
  InvoiceDateWrapper,
  PaymentTermsWrapper,
  InvoiceFormSection,
  InvoiceFormControlsWrapper,
} from './InvoiceForm.styled'

export const InvoiceForm = () => {
  const history = useHistory();
  const {
    newInvoicePayload,
    paymentTermsOptions,
    onUserLocationChange,
    onClientDetailsChange,
    onClientLocationChange,
    onInvoiceDetailsChange,
    onInvoiceItemChange,
    onInvoiceItemRemove,
    addNewInvoiceItem
  } = useInvoiceForm();

  return (
    <InvoiceFormWrapper>
      <InvoiceFormSection>
        <InvoiceFormSectionTitle as="h4">
          Bill From
        </InvoiceFormSectionTitle>
        <InputGroup
          htmlFor="invoice-user-address"
          label="Street Address"
        >
          <InputField
            id="invoice-user-address"
            name="street_address"
            type="text"
            value={newInvoicePayload.user_location.street_address}
            onChange={onUserLocationChange}
          />
        </InputGroup>

        <CityWrapper>
          <InputGroup
            htmlFor="invoice-user-city"
            label="City"
          >
            <InputField
              id="invoice-user-city"
              name="city"
              type="text"
              value={newInvoicePayload.user_location.city}
              onChange={onUserLocationChange}
            />
          </InputGroup>
        </CityWrapper>

        <PostcodeWrapper>
          <InputGroup
            htmlFor="invoice-user-postcode"
            label="Post Code"
          >
            <InputField
              id="invoice-user-postcode"
              name="postcode"
              type="text"
              value={newInvoicePayload.user_location.postcode}
              onChange={onUserLocationChange}
            />
          </InputGroup>
        </PostcodeWrapper>

        <CountryWrapper>
          <InputGroup
            htmlFor="invoice-user-country"
            label="Country"
          >
            <InputField
              id="invoice-user-country"
              name="country"
              type="text"
              value={newInvoicePayload.user_location.country}
              onChange={onUserLocationChange}
            />
          </InputGroup>
        </CountryWrapper>
      </InvoiceFormSection>


      <InvoiceFormSection>
        <InvoiceFormSectionTitle as="h4">
          Bill To
        </InvoiceFormSectionTitle>
        <InputGroup
          htmlFor="invoice-client-name"
          label="Client's Name"
        >
          <InputField
            id="invoice-client-name"
            name="name"
            type="text"
            value={newInvoicePayload.client.name}
            onChange={onClientDetailsChange}
          />
        </InputGroup>

        <InputGroup
          htmlFor="invoice-client-email"
          label="Client's Email"
        >
          <InputField
            id="invoice-client-email"
            name="email"
            type="email"
            value={newInvoicePayload.client.email}
            onChange={onClientDetailsChange}
          />
        </InputGroup>

        <InputGroup
          htmlFor="invoice-client-address"
          label="Street Address"
        >
          <InputField
            id="invoice-client-address"
            name="street_address"
            type="text"
            value={newInvoicePayload.client.location.street_address}
            onChange={onClientLocationChange}
          />
        </InputGroup>

        <CityWrapper>
          <InputGroup
            htmlFor="invoice-client-city"
            label="City"
          >
            <InputField
              id="invoice-client-city"
              name="city"
              type="text"
              value={newInvoicePayload.client.location.city}
              onChange={onClientLocationChange}
            />
          </InputGroup>
        </CityWrapper>

        <PostcodeWrapper>
          <InputGroup
            htmlFor="invoice-client-postcode"
            label="Post Code"
          >
            <InputField
              id="invoice-client-postcode"
              name="postcode"
              type="text"
              value={newInvoicePayload.client.location.postcode}
              onChange={onClientLocationChange}
            />
          </InputGroup>
        </PostcodeWrapper>
        <CountryWrapper>
          <InputGroup
            htmlFor="invoice-client-country"
            label="Country"
          >
            <InputField
              id="invoice-client-country"
              name="country"
              type="text"
              value={newInvoicePayload.client.location.country}
              onChange={onClientLocationChange}
            />
          </InputGroup>
        </CountryWrapper>
      </InvoiceFormSection>


      <InvoiceFormSection>
        <InvoiceDateWrapper>
          <InputGroup
            htmlFor="invoice-issue-date"
            label="Invoice Date"
          >
            <DatePickerField
              value={newInvoicePayload.issue_date}
              onChange={(value) => onInvoiceDetailsChange({target: {name: "issue_date", value }})}
            />
          </InputGroup>
        </InvoiceDateWrapper>

        <PaymentTermsWrapper>
          <InputGroup
            htmlFor="invoice-payment-terms"
            label="Payment Terms"
          >
            <SelectField
              options={paymentTermsOptions}
              value={newInvoicePayload.payment_terms}
              onChange={(value) => onInvoiceDetailsChange({target: {name: "payment_terms", value}})}
            />
          </InputGroup>
        </PaymentTermsWrapper>

        <InputGroup
          htmlFor="invoice-name"
          label="Project Description"
        >
          <InputField
            id="invoice-name"
            name="project_description"
            type="text"
            value={newInvoicePayload.project_description}
            onChange={onInvoiceDetailsChange}
          />
        </InputGroup>
      </InvoiceFormSection>

      <InvoiceFormSection>
        <InvoiceFormSectionTitle as="h2">
          Item List
        </InvoiceFormSectionTitle>
        {
          newInvoicePayload.items_list.map((invoiceItem, index) => (
            <InvoiceItemInput
              key={index}
              invoiceItem={invoiceItem}
              onChange={(invoiceItem) => onInvoiceItemChange(invoiceItem, index)}
              onRemove={() => onInvoiceItemRemove(index)}
            />
          ))
        }

        <SecondaryButton
          type="button"
          onClick={addNewInvoiceItem}
        >
          + Add new Item
        </SecondaryButton>
      </InvoiceFormSection>

      <InvoiceFormControlsWrapper>
        <SecondaryButton
          onClick={() => history.goBack()}
          type="button"
        >
          Discard
        </SecondaryButton>
        <TertiaryButton>
          Save as Draft
        </TertiaryButton>
        <PrimaryButton>
          Save & Send
        </PrimaryButton>
      </InvoiceFormControlsWrapper>
    </InvoiceFormWrapper>
  )
}
