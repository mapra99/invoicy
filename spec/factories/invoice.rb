FactoryBot.define do
  factory :invoice do
    association :user
    association :client
    association :currency

    name { Faker::Name.name }
    issue_date { Time.current - 2.days }
    due_date { Time.current - 10.days }
    status { Invoice.statuses.keys.sample }
    total_price { 100.59 }
  end

  factory :draft_invoice, class: 'Invoice' do
    association :user
    status { 'draft' }
  end
end
