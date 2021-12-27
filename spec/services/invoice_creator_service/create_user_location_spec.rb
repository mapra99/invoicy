require 'rails_helper'

describe InvoiceCreatorService::CreateUserLocation do
  subject { InvoiceCreatorService::CreateUserLocation }

  let(:user) { create(:user) }
  let(:location_payload) do
    {
      user_location: {
        street_address: Faker::Address.street_name,
        city: Faker::Address.city,
        postcode: Faker::Address.postcode,
        country: Faker::Address.country
      }
    }
  end

  describe 'when passing valid params' do
    let!(:context) { subject.call(user: user, payload: location_payload) }
    let(:location) { Location.find_by(location_payload[:user_location]) }

    it 'succeeds' do
      expect(context.success?).to eq true
    end

    it 'finds or creates a location' do
      expect(location).not_to be_nil
    end

    it 'sets associates the user to the given location' do
      expect(user.locations).to include(location)
    end
  end

  describe 'when no user is given' do
    let(:context) { subject.call(payload: location_payload) }

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

    describe 'for a payload with missing user_location key' do
      let(:context) { subject.call(user: user, payload: {something: true}) }

      it 'fails' do
        expect(context.success?).to eq false
      end
    end
  end
end
