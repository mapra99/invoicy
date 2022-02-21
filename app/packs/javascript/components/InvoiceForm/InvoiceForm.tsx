import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { InvoicesContext } from '../../contexts/InvoicesContext';
import { useInvoiceForm } from '../../hooks/useInvoiceForm';
import { InvoiceFormProps } from './types';
import { InputGroup } from '../InputGroup';
import { InputField } from '../InputField';
import { DatePickerField } from '../DatePickerField';
import { SelectField } from '../SelectField';
import { InvoiceItemInput } from '../InvoiceItemInput';
import { PrimaryButton } from '../PrimaryButton';
import { SecondaryButton } from '../SecondaryButton';
import { TertiaryButton } from '../TertiaryButton';
import { LoadingSpinner } from '../../icons/LoadingSpinner';
import { ROUTES } from '../../constants';
import { Status } from '../../models/Invoice';
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
} from './InvoiceForm.styled';

const { INVOICES_INDEX } = ROUTES.DASHBOARD;

export const InvoiceForm = ({ invoice }: InvoiceFormProps) => {
  const history = useHistory();
  const {
    newInvoicePayload,
    paymentTermsOptions,
    errors,
    onUserLocationChange,
    onClientDetailsChange,
    onClientLocationChange,
    onInvoiceDetailsChange,
    onInvoiceItemChange,
    onInvoiceItemRemove,
    addNewInvoiceItem,
    runValidations,
  } = useInvoiceForm(invoice);

  const { saveInvoice, updateInvoice, loadingNewInvoice } = useContext(InvoicesContext);

  const handleSubmit = async (event, status: Status = 'pending') => {
    event.preventDefault();

    const valid = await runValidations();
    if (!valid) return;

    if (invoice) {
      await updateInvoice(invoice, newInvoicePayload, status);
    } else {
      await saveInvoice(newInvoicePayload);
    }

    history.push(INVOICES_INDEX);
  };

  if (loadingNewInvoice) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <InvoiceFormWrapper onSubmit={handleSubmit}>
      <InvoiceFormSection>
        <InvoiceFormSectionTitle as="h4">
          Bill From
        </InvoiceFormSectionTitle>
        <InputGroup
          htmlFor="invoice-user-address"
          label="Street Address"
          error={errors.user_location.street_address}
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
            error={errors.user_location.city}
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
            error={errors.user_location.postcode}
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
            error={errors.user_location.country}
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
          error={errors.client.name}
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
          error={errors.client.email}
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
          error={errors.client.location.street_address}
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
            error={errors.client.location.city}
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
            error={errors.client.location.postcode}
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
            error={errors.client.location.country}
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
            error={errors.issue_date}
          >
            <DatePickerField
              value={newInvoicePayload.issue_date}
              onChange={(value) => onInvoiceDetailsChange({ target: { name: 'issue_date', value } })}
            />
          </InputGroup>
        </InvoiceDateWrapper>

        <PaymentTermsWrapper>
          <InputGroup
            htmlFor="invoice-payment-terms"
            label="Payment Terms"
            error={errors.payment_terms}
          >
            <SelectField
              options={paymentTermsOptions}
              value={newInvoicePayload.payment_terms}
              onChange={(value) => onInvoiceDetailsChange({ target: { name: 'payment_terms', value } })}
            />
          </InputGroup>
        </PaymentTermsWrapper>

        <InputGroup
          htmlFor="invoice-name"
          label="Project Description"
          error={errors.project_description}
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
              key={invoiceItem.name}
              invoiceItem={invoiceItem}
              onChange={(newInvoiceItem) => onInvoiceItemChange(newInvoiceItem, index)}
              errors={errors.items_list[index]}
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
        <TertiaryButton
          type="button"
          onClick={(event) => handleSubmit(event, 'draft')}
        >
          Save as Draft
        </TertiaryButton>
        <PrimaryButton type="submit">
          Save & Send
        </PrimaryButton>
      </InvoiceFormControlsWrapper>
    </InvoiceFormWrapper>
  );
};
