require 'rails_helper'

describe InvoiceUpdaterService::UpdateInvoice do
  subject { described_class.call(user: user_param, payload: payload_param) }

  let(:user) { create(:user) }
  let(:invoice) { create(:invoice, user: user) }
  let(:payload) do
    {
      uuid: invoice.uuid,
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

  let(:user_param) { user }
  let(:payload_param) { payload }

  it 'calls the service interactors' do
    expect(InvoiceFinderService::FindUserInvoiceByUuid).to receive(:call!)
    expect(InvoiceCreatorService::CreateUserLocation).to receive(:call!)
    expect(InvoiceCreatorService::CreateUserClient).to receive(:call!)
    expect(InvoiceCreatorService::CreateInvoiceItems).to receive(:call!)
    expect(InvoiceUpdaterService::SaveInvoice).to receive(:call!)

    described_class.call(user: user_param, payload: payload_param)
  end

  describe 'when missing params' do
    describe 'when user is missing' do
      let(:user_param) { nil }

      it { expect(subject.success?).to eq(false) }
      it { expect(subject.message).to eq('Expected user in context') }
    end

    describe 'when payload is missing' do
      let(:payload_param) { nil }

      it { expect(subject.success?).to eq(false) }
      it { expect(subject.message).to eq('Expected payload in context') }
    end
  end
end
