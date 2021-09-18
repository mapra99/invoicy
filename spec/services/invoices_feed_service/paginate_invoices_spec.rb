require 'rails_helper'

describe InvoicesFeedService::PaginateInvoices do
  let(:invoices) do
    create_list(:invoice, 20)
    Invoice.all
  end
  let(:limit) { 10 }
  let(:offset) { 5 }

  describe 'when given the pagination params' do
    subject(:context) do
      InvoicesFeedService::PaginateInvoices.call(invoices: invoices, limit: limit, offset: offset)
    end

    it 'succeeds' do
      expect(context.success?).to eq true
    end

    it 'performs pagination' do
      expect(context.invoices).to eq(invoices[5...15])
    end
  end

  describe 'when no pagination params are provide' do
    subject(:context) do
      InvoicesFeedService::PaginateInvoices.call(invoices: invoices)
    end

    it 'succeeds' do
      expect(context.success?).to eq true
    end

    it 'doesnt modify the collection' do
      expect(context.invoices).to eq(invoices)
    end
  end
end
