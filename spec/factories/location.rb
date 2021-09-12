FactoryBot.define do
  factory :location do
    country { Faker::Address.country }
    state { Faker::Address.state }
    city { Faker::Address.city }
    postcode { Faker::Address.postcode }
    street_address { Faker::Address.street_address }
  end
end
