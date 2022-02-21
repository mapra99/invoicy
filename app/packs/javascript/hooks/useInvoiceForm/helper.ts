import { Invoice } from '../../models/Invoice';
import {
  NewInvoiceItemPayload,
  UserLocationPayload,
  ClientPayload,
} from './types';
import {
  itemPayload,
  userLocationPayload,
  clientPayload,
  today,
} from './initialValues';
import { diffDays } from '../../utils/diffDays';

export const buildItemsListPayload = (invoice?: Invoice) => {
  if (!invoice?.items) return [itemPayload];

  return invoice.items.map((item) => ({
    name: item.name || itemPayload.name,
    quantity: item.quantity || itemPayload.quantity,
    price: item.fixedUnitPrice || itemPayload.price,
    total_price: item.totalPrice || itemPayload.total_price,
  }));
};

export const buildClientPayload = (invoice?: Invoice) => {
  if (!invoice?.client) return clientPayload;

  const { name, email, location } = invoice.client;

  return {
    name: name || '',
    email: email || '',
    location: {
      street_address: location?.streetAddress || '',
      city: location?.city || '',
      postcode: location?.postcode || '',
      country: location?.country || '',
    },
  };
};

export const buildUserLocationPayload = (invoice?: Invoice) => {
  if (!invoice?.user?.location) return userLocationPayload;

  const {
    city, country, postcode, streetAddress,
  } = invoice.user.location;

  return {
    street_address: streetAddress || '',
    city: city || '',
    postcode: postcode || '',
    country: country || '',
  };
};

export const buildInvoicePayload = (
  userLocation: UserLocationPayload,
  client: ClientPayload,
  invoiceItems: NewInvoiceItemPayload[],
  invoice?: Invoice,
) => {
  if (!invoice) {
    return {
      user_location: userLocation,
      client,
      issue_date: today,
      payment_terms: 0,
      project_description: '',
      items_list: invoiceItems,
    };
  }

  const { issueDate, dueDate, name } = invoice;
  const resolvedIssueDate = issueDate ? new Date(issueDate) : today;
  const paymentTerms = issueDate && dueDate ? diffDays(issueDate, dueDate) : 0;

  return {
    user_location: userLocation,
    client,
    issue_date: resolvedIssueDate,
    payment_terms: paymentTerms,
    project_description: name || '',
    items_list: invoiceItems,
  };
};
