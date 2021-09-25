FactoryBot.define do
  factory :currency do
    name { Faker::Currency.name }
    abbreviation { "#{Faker::Currency.code}#{Random.rand}" }
    symbol { Faker::Currency.symbol }
    min_size { 0.01 }
  end
end
