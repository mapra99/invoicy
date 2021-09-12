FactoryBot.define do
  factory :currency do
    name { 'Colombian Peso' }
    abbreviation { %w[COP USD EUR UYU MXN ZWL UGX].sample }
    symbol { '$' }
    min_size { 50 }
  end
end
