require 'rails_helper'

describe InvoiceFinderService::FindUserInvoiceByUuid do
  subject { InvoiceFinderService::FindUserInvoiceByUuid }

  let(:user) { create(:user) }
  let(:target_invoice) { create(:invoice, user: user) }
  let(:target_uuid) { target_invoice.uuid }

  let(:user_param) { user }
  let(:uuid_param) { target_uuid }
  let(:context) { subject.call(user: user_param, uuid: uuid_param) }

  describe 'when invoice exists' do
    it { expect(context.success?).to be true }

    it 'returns the found invoice' do
      expect(context.invoice).to eq(target_invoice)
    end
  end

  describe 'when invoice is not found' do
    let(:uuid_param) { 'abc' }

    it { expect(context.success?).to be false }
    it { expect(context.message).to eq('Invoice not found') }
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
  end
end
