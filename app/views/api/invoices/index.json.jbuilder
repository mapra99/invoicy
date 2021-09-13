json.array! @invoices do |invoice|
  json.partial! 'api/invoices/invoice', invoice: invoice
end
