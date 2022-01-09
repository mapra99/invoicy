require 'rails_helper'

describe InvoiceUpdaterService::UpdateUserInvoiceStatus do
  subject { InvoiceUpdaterService::UpdateUserInvoiceStatus }

  let(:user) { create(:user) }
  let(:target_invoice) { create(:invoice, user: user, status: :pending) }
  let(:target_uuid) { target_invoice.uuid }

  let(:user_param) { user }
  let(:uuid_param) { target_uuid }
  let(:status_param) { "paid" }
  let(:context) { subject.call(user: user_param, uuid: uuid_param, status: status_param) }

  describe 'when invoice exists' do
    it { expect(context.success?).to be true }

    it 'updates the invoice status' do
      expect(context.invoice.status).to eq(status_param)
    end
  end

  describe 'when invoice is not found' do
    let(:uuid_param) { 'abc' }

    it { expect(context.success?).to be false }
    it { expect(context.message).to eq('Invoice not found') }
    it { expect(context.code).to eq(404) }
  end

  describe 'when status is not valid' do
    let(:status_param) { 'free' }

    it { expect(context.success?).to be false }
    it { expect(context.message).to eq('Status not valid') }
    it { expect(context.code).to eq(400) }
  end

  describe 'when missing params' do
    describe 'when user not present' do
      let(:user_param) { nil }

      it { expect(context.success?).to be false }
      it { expect(context.message).to eq('Expected user in context') }
    end

    describe 'when uuid not present' do
      let(:uuid_param) { nil }

      it { expect(context.success?).to be false }
      it { expect(context.message).to eq('Expected uuid in context') }
    end

    describe 'when status not present' do
      let(:status_param) { nil }

      it { expect(context.success?).to be false }
      it { expect(context.message).to eq('Expected status in context') }
    end
  end
end
