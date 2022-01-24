FactoryBot.define do
  factory :communication do
    topic { Communication.topics.keys.sample }
  end
end
