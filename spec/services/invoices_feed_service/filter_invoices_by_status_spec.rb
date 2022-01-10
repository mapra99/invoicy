require 'rails_helper'

describe InvoicesFeedService::FilterInvoicesByStatus do
  subject { InvoicesFeedService::FilterInvoicesByStatus }

  let(:invoices) do
    create_list(:invoice, 20)
    Invoice.all
  end

  describe 'when passing no filters' do
    let(:context) { subject.call(invoices: invoices) }

    it 'succeeds' do
      expect(context.success?).to eq true
    end

    it 'returns the same invoices' do
      expect(context.invoices).to match_array(invoices)
    end
  end

  describe 'when passing status filter' do
    let(:target_statuses) { %w[paid pending] }
    let(:invoices) do
      create_list(:invoice, 10, status: 'paid')
      create_list(:invoice, 10, status: 'pending')
      create_list(:invoice, 10, status: 'draft')

      Invoice.all
    end
    let(:context) { subject.call(invoices: invoices, filters: { status: target_statuses }) }

    it 'succeeds' do
      expect(context.success?).to eq true
    end

    it 'returns only the invoices with the wanted status' do
      expect(context.invoices.pluck(:status).uniq).to eq(target_statuses)
    end
  end
end
