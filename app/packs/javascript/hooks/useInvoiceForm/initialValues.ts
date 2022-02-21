import {
  NewInvoicePayload,
  NewInvoiceItemPayload,
  UserLocationPayload,
  ClientPayload,
  PaymentTermsOption,
} from './types';

export const today = new Date();

export const itemPayload: NewInvoiceItemPayload = {
  name: '',
  quantity: 0,
  price: 0,
  total_price: 0,
};

export const userLocationPayload: UserLocationPayload = {
  street_address: '',
  city: '',
  postcode: '',
  country: '',
};

export const clientPayload: ClientPayload = {
  name: '',
  email: '',
  location: {
    street_address: '',
    city: '',
    postcode: '',
    country: '',
  },
};

export const paymentTermsOptions: PaymentTermsOption[] = [
  { value: 0, label: 'Inmediate' },
  { value: 10, label: 'Next 10 Days' },
  { value: 30, label: 'Next 30 Days' },
  { value: 60, label: 'Next 60 Days' },
];

export const baseInvoiceItemError = {
  name: null,
  price: null,
  quantity: null,
  total_price: null,
};

export const baseErrors = {
  project_description: null,
  issue_date: null,
  payment_terms: null,
  user_location: {
    city: null,
    country: null,
    postcode: null,
    street_address: null,
  },
  client: {
    name: null,
    email: null,
    location: {
      city: null,
      country: null,
      postcode: null,
      street_address: null,
    },
  },
  items_list: [baseInvoiceItemError],
};
