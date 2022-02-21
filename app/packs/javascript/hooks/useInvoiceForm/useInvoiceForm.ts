import { useState, useEffect } from 'react';
import { ValidationError } from 'yup';
import {
  NewInvoicePayload,
  NewInvoiceItemPayload,
  UserLocationPayload,
  ClientPayload,
} from './types';

import {
  itemPayload,
  userLocationPayload,
  clientPayload,
  basePayload,
  paymentTermsOptions,
  baseErrors,
  baseInvoiceItemError,
} from './initialValues';

import { newInvoiceSchema } from './validationSchema';

export const useInvoiceForm = () => {
  const [newInvoicePayload, setNewInvoicePayload] = useState<NewInvoicePayload>(basePayload);
  const [userLocation, setUserLocation] = useState<UserLocationPayload>(userLocationPayload);
  const [client, setClient] = useState<ClientPayload>(clientPayload);
  const [invoiceItems, setInvoiceItems] = useState<NewInvoiceItemPayload[]>([itemPayload]);
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
      eval(`errorsDup.${path} = "${messages}"`);
    });

    console.log({ baseErrors, errorsDup, newInvoicePayload });
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
