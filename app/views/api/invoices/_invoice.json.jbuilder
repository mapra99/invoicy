json.id invoice.id
json.uuid invoice.uuid
json.dueDate invoice.due_date

if invoice.client.present?
  json.client do
    json.id invoice.client.id
    json.name invoice.client.name
  end
end

json.totalPrice invoice.total_price

if invoice.currency.present?
  json.currency do
    json.abbreviation invoice.currency.abbreviation
    json.symbol invoice.currency.symbol
    json.minSize invoice.currency.min_size
  end
end

json.createdAt invoice.created_at
json.updatedAt invoice.updated_at
