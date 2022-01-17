require 'rails_helper'

describe InvoiceFinderService::FindInvoiceByExternalId do
  subject { InvoiceFinderService::FindInvoiceByExternalId }

  let(:target_invoice) { create(:invoice) }
  let(:target_external_id) { target_invoice.external_id }

  let(:external_id_param) { target_external_id }
  let(:context) { subject.call(external_id: external_id_param) }

  describe 'when invoice exists' do
    it { expect(context.success?).to be true }

    it 'returns the found invoice' do
      expect(context.invoice).to eq(target_invoice)
    end
  end

  describe 'when invoice is not found' do
    let(:external_id_param) { 'abc' }

    it { expect(context.success?).to be false }
    it { expect(context.message).to eq('Invoice not found') }
    it { expect(context.code).to eq(404) }
  end

  describe 'when missing params' do
    describe 'when external_id not present' do
      let(:external_id_param) { nil }

      it { expect(context.success?).to be false }
      it { expect(context.message).to eq('Expected external_id in context') }
    end
  end
end
