json.id invoice.id
json.uuid invoice.uuid
json.name invoice.name
json.issueDate invoice.issue_date
json.dueDate invoice.due_date
json.totalPrice invoice.total_price
json.status invoice.status

if invoice.client.present?
  json.client do
    json.id invoice.client.id
    json.name invoice.client.name
    json.email invoice.client_email&.email

    if invoice.client_location.present?
      json.location do
        json.streetAddress invoice.client_location.location.street_address
        json.city invoice.client_location.location.city
        json.postcode invoice.client_location.location.postcode
        json.country invoice.client_location.location.country
      end
    end
  end
end

if invoice.user.present?
  json.user do
    if invoice.user_location.present?
      json.location do
        json.streetAddress invoice.user_location.location.street_address
        json.city invoice.user_location.location.city
        json.postcode invoice.user_location.location.postcode
        json.country invoice.user_location.location.country
      end
    end
  end
end

if invoice.currency.present?
  json.currency do
    json.abbreviation invoice.currency.abbreviation
    json.symbol invoice.currency.symbol
    json.minSize invoice.currency.min_size
  end
end

json.createdAt invoice.created_at
json.updatedAt invoice.updated_at

if invoice.items.present?
  json.items invoice.invoice_items do |invoice_item|
    json.name invoice_item.item.name
    json.quantity invoice_item.quantity
    json.fixedUnitPrice invoice_item.fixed_unit_price
    json.totalPrice invoice_item.total_price
    json.currency do
      json.abbreviation invoice_item.currency.abbreviation
      json.symbol invoice_item.currency.symbol
      json.minSize invoice_item.currency.min_size
    end
  end
end
