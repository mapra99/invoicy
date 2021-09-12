FactoryBot.define do
  factory :item do
    association :user
    name { "#{Faker::ProgrammingLanguage.name} services" }
    standard_unit_price { Faker::Commerce.price }
  end
end
