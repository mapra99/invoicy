import { useState } from 'react';
import { ValidationError } from 'yup';
import { Invoice } from '../../models/Invoice';
import {
  NewInvoicePayload,
  NewInvoiceItemPayload,
} from './types';
import {
  itemPayload,
  paymentTermsOptions,
  baseErrors,
  baseInvoiceItemError,
} from './initialValues';
import { buildInvoicePayload } from './helper';
import { newInvoiceSchema } from './validationSchema';

export const useInvoiceForm = (invoice?: Invoice) => {
  const [
    newInvoicePayload,
    setNewInvoicePayload,
  ] = useState<NewInvoicePayload>(buildInvoicePayload(invoice));

  const [errors, setErrors] = useState(baseErrors);

  const onUserLocationChange = (event) => {
    const { name, value } = event.target;

    const newUserLocation = {
      ...newInvoicePayload.user_location,
      [name]: value,
    };

    setNewInvoicePayload({
      ...newInvoicePayload,
      user_location: newUserLocation,
    });
  };

  const onClientDetailsChange = (event) => {
    const { name, value } = event.target;
    const { client } = newInvoicePayload;

    const newClient = {
      ...client,
      [name]: value,
    };

    setNewInvoicePayload({
      ...newInvoicePayload,
      client: newClient,
    });
  };

  const onClientLocationChange = (event) => {
    const { name, value } = event.target;
    const { client } = newInvoicePayload;

    const newClient = {
      ...client,
      location: {
        ...client.location,
        [name]: value,
      },
    };

    setNewInvoicePayload({
      ...newInvoicePayload,
      client: newClient,
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
    const updatedInvoiceItems = [...newInvoicePayload.items_list];
    updatedInvoiceItems[index] = invoiceItem;

    setNewInvoicePayload({
      ...newInvoicePayload,
      items_list: updatedInvoiceItems,
    });
  };

  const onInvoiceItemRemove = (index: number) => {
    const updatedInvoiceItems = [...newInvoicePayload.items_list];
    updatedInvoiceItems.splice(index, 1);

    setNewInvoicePayload({
      ...newInvoicePayload,
      items_list: updatedInvoiceItems,
    });

    const updatedInvoiceItemsErrors = [...errors.items_list];
    updatedInvoiceItemsErrors.splice(index, 1);
    setErrors({
      ...errors,
      items_list: updatedInvoiceItemsErrors,
    });
  };

  const addNewInvoiceItem = () => {
    const updatedInvoiceItems = [
      ...newInvoicePayload.items_list,
      itemPayload,
    ];

    setNewInvoicePayload({
      ...newInvoicePayload,
      items_list: updatedInvoiceItems,
    });

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
