export interface NewInvoiceItemPayload {
  name: string;
  quantity: number;
  price: number;
  total_price: number;
}

export interface UserLocationPayload {
  street_address: string;
  city: string;
  postcode: string;
  country: string;
}

export interface ClientPayload {
  name: string;
  email: string;
  location: UserLocationPayload;
}

export interface NewInvoicePayload {
  user_location: UserLocationPayload;
  client: ClientPayload;
  issue_date: Date;
  payment_terms: number;
  project_description: string;
  items_list: NewInvoiceItemPayload[]
}

export interface PaymentTermsOption {
  label: string;
  value: number;
}
