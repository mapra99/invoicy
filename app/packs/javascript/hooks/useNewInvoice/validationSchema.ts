import * as yup from 'yup';
import { today } from './initialValues'

const IS_REQUIRED_MESSAGE = "This field is required"
const IS_EMAIL_FORMAT_MESSAGE = "This field should be a valid email"
const IS_POSITIVE_MESSAGE = "This field should be a positive number"

export const newInvoiceSchema = yup.object().shape({
  project_description: yup.string().required(IS_REQUIRED_MESSAGE),
  issue_date: yup.date().min(today, "The issue date should be today or later").required(IS_REQUIRED_MESSAGE),
  payment_terms: yup.number().integer().min(0).required(IS_REQUIRED_MESSAGE),
  user_location: yup.object().shape({
    city: yup.string().required(IS_REQUIRED_MESSAGE),
    country: yup.string().required(IS_REQUIRED_MESSAGE),
    postcode: yup.string().required(IS_REQUIRED_MESSAGE),
    street_address: yup.string().required(IS_REQUIRED_MESSAGE),
  }),
  client: yup.object().shape({
    name: yup.string().required(IS_REQUIRED_MESSAGE),
    email: yup.string().email(IS_EMAIL_FORMAT_MESSAGE).required(IS_REQUIRED_MESSAGE),
    location: yup.object().shape({
      city: yup.string().required(IS_REQUIRED_MESSAGE),
      country: yup.string().required(IS_REQUIRED_MESSAGE),
      postcode: yup.string().required(IS_REQUIRED_MESSAGE),
      street_address: yup.string().required(IS_REQUIRED_MESSAGE),
    })
  }),
  items_list: yup.array().of(yup.object().shape({
    name: yup.string().required(IS_REQUIRED_MESSAGE),
    price: yup.number().positive(IS_POSITIVE_MESSAGE).required(IS_REQUIRED_MESSAGE),
    quantity: yup.number().positive(IS_POSITIVE_MESSAGE).required(IS_REQUIRED_MESSAGE),
    total_price: yup.number().positive(IS_POSITIVE_MESSAGE).required(IS_REQUIRED_MESSAGE)
  }))
})
