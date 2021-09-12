FactoryBot.define do
  factory :client_email do
    association :client
    email { Faker::Internet.email}
  end
end
