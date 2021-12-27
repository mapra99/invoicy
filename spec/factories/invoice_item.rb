FactoryBot.define do
  factory :invoice_item do
    association :invoice
    association :item
    association :currency

    quantity { 5.1 }
    fixed_unit_price { Faker::Commerce.price }
    total_price { quantity * fixed_unit_price }
  end
end
