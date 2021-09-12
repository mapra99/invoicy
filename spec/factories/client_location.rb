FactoryBot.define do
  factory :client_location do
    association :client
    association :location
  end
end
