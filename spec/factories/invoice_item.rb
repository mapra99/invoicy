FactoryBot.define do
  factory :invoice_item do
    association :invoice
    association :item

    quantity { 5.1 }
    fixed_unit_price { Faker::Commerce.price }
  end
end
