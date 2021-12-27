require 'rails_helper'

describe InvoiceCreatorService::CreateUserClient do
  subject { InvoiceCreatorService::CreateUserClient }

  let(:user) { create(:user) }
  let(:client_payload) do
    {
      client: {
        name: Faker::Name.name,
        email: Faker::Internet.email,
        location: {
          street_address: Faker::Address.street_name,
          city: Faker::Address.city,
          postcode: Faker::Address.postcode,
          country: Faker::Address.country
        }
      }
    }
  end

  describe 'when passing valid params' do
    let!(:context) { subject.call(user: user, payload: client_payload) }
    let(:location) { Location.find_by(client_payload[:client][:location]) }
    let(:email) { ClientEmail.find_by(email: client_payload[:client][:email]) }

    it 'succeeds' do
      expect(context.success?).to eq true
    end

    it 'returns the created client' do
      expect(context.client).to be_a Client
    end

    it 'returns the client location' do
      expect(context.client_location).to be_a ClientLocation
    end

    it 'returns the client email' do
      expect(context.client_email).to be_a ClientEmail
    end

    it 'associates the user to the client' do
      expect(user.clients).to include(context.client)
    end

    it 'finds or creates a location for the client' do
      expect(location).not_to be_nil
    end

    it 'associates the client to the given location' do
      expect(context.client.locations).to include(location)
    end

    it 'sets a client email' do
      expect(email).not_to be_nil
    end

    it 'associates the client to the given email' do
      expect(context.client.emails).to include(email)
    end
  end

  describe 'when no user is given' do
    let(:context) { subject.call(payload: client_payload) }

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

    describe 'for a payload with missing client key' do
      let(:context) { subject.call(user: user, payload: {something: true}) }

      it 'fails' do
        expect(context.success?).to eq false
      end
    end
  end
end
