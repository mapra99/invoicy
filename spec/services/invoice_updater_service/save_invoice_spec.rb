require 'rails_helper'

describe InvoiceUpdaterService::SaveInvoice do
  subject { InvoiceUpdaterService::SaveInvoice }

  let(:user) { create(:user) }
  let(:invoice) { create(:invoice, user: user, status: invoice_status) }
  let(:invoice_status) { :draft }
  let(:client) { create(:client) }
  let(:user_location) { create(:user_location, user: user) }
  let(:client_location) { create(:client_location, client: client) }
  let(:client_email) { create(:client_email, client: client) }
  let(:invoice_items) { build_list(:invoice_item, 2) }

  let(:invoice_payload) do
    {
      issue_date: Date.today.strftime("%Y-%m-%d"),
      payment_terms: 10,
      project_description: Faker::Lorem.sentence,
      status: :pending
    }
  end

  describe 'when passing valid params' do
    let(:context) do
      subject.call(
        user: user,
        invoice: invoice,
        client: client,
        user_location: user_location,
        client_location: client_location,
        client_email: client_email,
        invoice_items: invoice_items,
        payload: invoice_payload
      )
    end

    describe 'when invoice is draft' do
      let(:invoice_status) { :draft }

      it 'succeeds' do
        expect(context.success?).to eq true
      end
    end

    describe 'when invoice is pending or paid' do
      let(:invoice_status) { %i[pending paid].sample }

      it 'succeeds' do
        expect(context.success?).to eq false
      end
    end
  end

  context 'validation checks' do
    let(:user_param) { user }
    let(:invoice_param) { invoice }
    let(:client_param) { client }
    let(:payload_param) { invoice_payload }
    let(:context) do
      subject.call(
        user: user_param,
        invoice: invoice_param,
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

    describe 'when no invoice is given' do
      let(:invoice_param) { nil }

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
