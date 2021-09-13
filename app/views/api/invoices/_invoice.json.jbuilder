json.id invoice.id
json.uuid invoice.uuid
json.dueDate invoice.due_date

json.client do
  json.name invoice.client.name
end

json.total_price invoice.total_price

json.currency do
  json.abbreviation invoice.currency.abbreviation
  json.symbol invoice.currency.symbol
  json.minSize invoice.currency.min_size
end

json.createdAt invoice.created_at
json.updatedAt invoice.updated_at
  