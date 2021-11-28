import React from 'react'
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
  InvoiceFormSection,
  InvoiceFormControlsWrapper
} from './InvoiceForm.styled'

export const InvoiceForm = () => {
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
            name="user_location[street_address]"
            type="text"
          />
        </InputGroup>

        <CityWrapper>
          <InputGroup
              htmlFor="invoice-user-city"
              label="City"
            >
              <InputField
                id="invoice-user-city"
                name="user_location[city]"
                type="text"
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
                name="user_location[postcode]"
                type="text"
              />
          </InputGroup>
        </PostcodeWrapper>

        <InputGroup
            htmlFor="invoice-user-country"
            label="Country"
          >
            <InputField
              id="invoice-user-country"
              name="user_location[country]"
              type="text"
            />
        </InputGroup>
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
            name="client[name]"
            type="text"
          />
        </InputGroup>

        <InputGroup
          htmlFor="invoice-client-email"
          label="Client's Email"
        >
          <InputField
            id="invoice-client-email"
            name="client[email]"
            type="email"
          />
        </InputGroup>

        <InputGroup
          htmlFor="invoice-client-address"
          label="Street Address"
        >
          <InputField
            id="invoice-client-address"
            name="client_location[street_address]"
            type="text"
          />
        </InputGroup>

        <CityWrapper>
          <InputGroup
              htmlFor="invoice-client-city"
              label="City"
            >
              <InputField
                id="invoice-client-city"
                name="client_location[city]"
                type="text"
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
                name="client_location[postcode]"
                type="text"
              />
          </InputGroup>
        </PostcodeWrapper>

        <InputGroup
            htmlFor="invoice-client-country"
            label="Country"
          >
            <InputField
              id="invoice-client-country"
              name="client_location[country]"
              type="text"
            />
        </InputGroup>
      </InvoiceFormSection>


      <InvoiceFormSection>
        <InputGroup
          htmlFor="invoice-issue-date"
          label="Invoice Date"
        >
          <DatePickerField />
        </InputGroup>

        <InputGroup
          htmlFor="invoice-payment-terms"
          label="Payment Terms"
        >
          <SelectField
            options={[
              { value: 0, label: "Inmediate" },
              { value: 10, label: "Next 10 Days" },
              { value: 30, label: "Next 30 Days" },
              { value: 60, label: "Next 60 Days" }
            ]}
          />
        </InputGroup>

        <InputGroup
            htmlFor="invoice-name"
            label="Project Description"
          >
            <InputField
              id="invoice-name"
              name="invoice[name]"
              type="text"
            />
        </InputGroup>
      </InvoiceFormSection>

      <InvoiceFormSection>
        <InvoiceFormSectionTitle as="h2">
          Item List
        </InvoiceFormSectionTitle>
        <InvoiceItemInput />
        <InvoiceItemInput />

        <SecondaryButton>
          + Add new Item
        </SecondaryButton>
      </InvoiceFormSection>

      <InvoiceFormControlsWrapper>
        <SecondaryButton>
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
