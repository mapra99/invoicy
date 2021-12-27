require 'rails_helper'

describe InvoiceCreatorService::CreateInvoiceItems do
  subject { InvoiceCreatorService::CreateInvoiceItems }

  let(:user) { create(:user) }
  let(:items_payload) do
    {
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

  describe 'when passing valid params' do
    let!(:context) { subject.call(user: user, payload: items_payload) }

    it 'succeeds' do
      expect(context.success?).to eq true
    end
  end

  describe 'when no user is given' do
    let(:context) { subject.call(payload: items_payload) }

    it 'fails' do
      expect(context.success?).to eq false
    end
  end

  describe 'when no valid payload is given' do
    describe 'for an empty payload' do
      let(:context) { subject.call(user: user, payload: {}) }

      it 'fails' do
        expect(context.success?).to eq false
      end
    end

    describe 'for a payload with missing items_list key' do
      let(:context) { subject.call(user: user, payload: {something: true}) }

      it 'fails' do
        expect(context.success?).to eq false
      end
    end
  end
end
