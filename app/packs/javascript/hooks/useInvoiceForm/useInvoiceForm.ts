import { useState, useEffect } from 'react';
import { ValidationError } from 'yup';
import { Invoice } from '../../models/Invoice';
import {
  NewInvoicePayload,
  NewInvoiceItemPayload,
  UserLocationPayload,
  ClientPayload,
} from './types';

import {
  itemPayload,
  paymentTermsOptions,
  baseErrors,
  baseInvoiceItemError,
} from './initialValues';

import {
  buildItemsListPayload,
  buildClientPayload,
  buildUserLocationPayload,
  buildInvoicePayload,
} from './helper';

import { newInvoiceSchema } from './validationSchema';

export const useInvoiceForm = (invoice?: Invoice) => {
  const [
    userLocation,
    setUserLocation,
  ] = useState<UserLocationPayload>(buildUserLocationPayload(invoice));
  const [
    client,
    setClient,
  ] = useState<ClientPayload>(buildClientPayload(invoice));
  const [
    invoiceItems,
    setInvoiceItems,
  ] = useState<NewInvoiceItemPayload[]>(buildItemsListPayload(invoice));

  const [
    newInvoicePayload,
    setNewInvoicePayload,
  ] = useState<NewInvoicePayload>(buildInvoicePayload(
    userLocation,
    client,
    invoiceItems,
    invoice,
  ));

  const [errors, setErrors] = useState(baseErrors);

  useEffect(() => {
    setNewInvoicePayload({
      ...newInvoicePayload,
      client,
      user_location: userLocation,
      items_list: invoiceItems,
    });
  }, [userLocation, client, invoiceItems]);

  const onUserLocationChange = (event) => {
    const { name, value } = event.target;
    setUserLocation({
      ...userLocation,
      [name]: value,
    });
  };

  const onClientDetailsChange = (event) => {
    const { name, value } = event.target;
    setClient({
      ...client,
      [name]: value,
    });
  };

  const onClientLocationChange = (event) => {
    const { name, value } = event.target;
    setClient({
      ...client,
      location: {
        ...client.location,
        [name]: value,
      },
    });
  };

  const onInvoiceDetailsChange = (event) => {
    const { name, value } = event.target;
    setNewInvoicePayload({
      ...newInvoicePayload,
      [name]: value,
    });
  };

  const onInvoiceItemChange = (invoiceItem: NewInvoiceItemPayload, index: number) => {
    const updatedInvoiceItems = [...invoiceItems];
    updatedInvoiceItems[index] = invoiceItem;

    setInvoiceItems(updatedInvoiceItems);
  };

  const onInvoiceItemRemove = (index: number) => {
    const updatedInvoiceItems = [...invoiceItems];
    updatedInvoiceItems.splice(index, 1);

    setInvoiceItems(updatedInvoiceItems);

    const updatedInvoiceItemsErrors = [...errors.items_list];
    updatedInvoiceItemsErrors.splice(index, 1);
    setErrors({
      ...errors,
      items_list: updatedInvoiceItemsErrors,
    });
  };

  const addNewInvoiceItem = () => {
    setInvoiceItems([
      ...invoiceItems,
      itemPayload,
    ]);

    setErrors({
      ...errors,
      items_list: [
        ...errors.items_list,
        baseInvoiceItemError,
      ],
    });
  };

  const parseValidationErrors = (errorObjects) => {
    const errorsDup = { ...baseErrors };
    errorObjects.forEach((error) => {
      const { path, errors: messages } = error;

      // eslint-disable-next-line no-eval
      eval(`errorsDup.${path} = "${messages}"`);
    });

    setErrors(errorsDup);
  };

  const runValidations = async () => {
    try {
      await newInvoiceSchema.validate(newInvoicePayload, { abortEarly: false });
      return true;
    } catch (err) {
      if (err instanceof ValidationError) {
        parseValidationErrors(err.inner);
        return false;
      }
      throw err;
    }
  };

  return {
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
  };
};
