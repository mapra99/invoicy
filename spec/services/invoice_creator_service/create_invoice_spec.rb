require 'rails_helper'

describe InvoiceCreatorService::CreateInvoice do
  let(:user) { create(:user) }
  let(:payload) do
    {
      issue_date: Date.today.strftime('%Y-%m-%d'),
      payment_terms: 30,
      project_description: Faker::Lorem.sentence,
      status: :pending,
      user_location: {
        street_address: Faker::Address.street_name,
        city: Faker::Address.city,
        postcode: Faker::Address.postcode,
        country: Faker::Address.country
      },
      client: {
        name: Faker::Name.name,
        email: Faker::Internet.email,
        location: {
          street_address: Faker::Address.street_name,
          city: Faker::Address.city,
          postcode: Faker::Address.postcode,
          country: Faker::Address.country
        }
      },
      items_list: [{
        name: Faker::Lorem.sentence,
        quantity: (1..10).to_a.sample,
        price: Faker::Commerce.price,
        total_price: Faker::Commerce.price
      }, {
        name: Faker::Lorem.sentence,
        quantity: (1..10).to_a.sample,
        price: Faker::Commerce.price,
        total_price: Faker::Commerce.price
      }]
    }
  end

  subject { InvoiceCreatorService::CreateInvoice }

  it 'calls the service interactors' do
    expect(InvoiceCreatorService::CreateUserLocation).to receive(:call!)
    expect(InvoiceCreatorService::CreateUserClient).to receive(:call!)
    expect(InvoiceCreatorService::CreateInvoiceItems).to receive(:call!)
    expect(InvoiceCreatorService::SaveInvoice).to receive(:call!)

    subject.call(user: user, payload: payload)
  end
end
