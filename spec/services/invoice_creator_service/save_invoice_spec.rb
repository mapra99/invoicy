require 'rails_helper'

describe InvoiceCreatorService::SaveInvoice do
  subject { InvoiceCreatorService::SaveInvoice }

  let(:user) { create(:user) }
  let(:client) { create(:client) }
  let(:user_location) { create(:user_location, user: user) }
  let(:client_location) { create(:client_location, client: client) }
  let(:client_email) { create(:client_email, client: client) }
  let(:invoice_items) { build_list(:invoice_item, 2) }

  let(:invoice_payload) do
    {
      issue_date: Date.today.strftime("%Y-%m-%d"),
      payment_terms: 30,
      project_description: Faker::Lorem.sentence,
      status: :pending,
    }
  end

  describe 'when passing valid params' do
    let!(:context) do
      subject.call(
        user: user,
        client: client,
        user_location: user_location,
        client_location: client_location,
        client_email: client_email,
        invoice_items: invoice_items,
        payload: invoice_payload
      )
    end

    it 'succeeds' do
      expect(context.success?).to eq true
    end

    context 'created invoice' do
      let(:invoice) { Invoice.last }

      it 'is returned in the context' do
        expect(invoice).to eq(context.invoice)
      end

      it 'has the items associated' do
        expect(invoice.items.pluck(:name)).to eq(invoice_items.map(&:item).pluck(:name))
      end

      it 'belongs to the current user' do
        expect(invoice.user).to eq(user)
      end

      it 'belongs to the client' do
        expect(invoice.client).to eq(client)
      end

      it 'is associated to the given client email' do
        expect(invoice.client_email).to eq(client_email)
      end

      it 'is associated to the given client location' do
        expect(invoice.client_location).to eq(client_location)
      end

      it 'is associated to the given user location' do
        expect(invoice.user_location).to eq(user_location)
      end
    end
  end

  context 'validation checks' do
    let(:user_param) { user }
    let(:client_param) { client }
    let(:payload_param) { invoice_payload }
    let(:context) do
      subject.call(
        user: user_param,
        client: client_param,
        user_location: user_location,
        client_location: client_location,
        client_email: client_email,
        invoice_items: invoice_items,
        payload: payload_param
      )
    end

    describe 'when no user is given' do
      let(:user_param) { nil }

      it { expect(context.success?).to eq false }
    end

    describe 'when no client is given' do
      let(:client_param) { nil }

      it { expect(context.success?).to eq false }
    end

    describe 'when no user_location is given' do
      let(:user_location) { nil }

      it { expect(context.success?).to eq false }
    end

    describe 'when no client_location is given' do
      let(:client_location) { nil }

      it { expect(context.success?).to eq false }
    end

    describe 'when no client_email is given' do
      let(:client_email) { nil }

      it { expect(context.success?).to eq false }
    end

    describe 'when no invoice_items is given' do
      let(:invoice_items) { nil }

      it { expect(context.success?).to eq false }
    end

    describe 'when no valid payload is given' do
      describe 'when empty' do
        let(:payload_param) { {} }

        it { expect(context.success?).to eq false }
      end

      describe 'when payment_terms is not present' do
        let(:payload_param) { invoice_payload.except(:payment_terms) }

        it { expect(context.success?).to eq false }
      end

      describe 'when issue_date is not present' do
        let(:payload_param) { invoice_payload.except(:issue_date) }

        it { expect(context.success?).to eq false }
      end

      describe 'when status is not present' do
        let(:payload_param) { invoice_payload.except(:status) }

        it { expect(context.success?).to eq false }
      end

      describe 'when project_description is not present' do
        let(:payload_param) { invoice_payload.except(:project_description) }

        it { expect(context.success?).to eq false }
      end
    end
  end
end
