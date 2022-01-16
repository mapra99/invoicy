require 'rails_helper'

describe InvoicesFeedService::BuildInvoicesFeed do
  let(:user) { create(:user) }
  let(:invoices) { create_list(:invoice, 20, user: user) }
  let(:limit) { 10 }
  let(:offset) { 5 }
  let(:filters) {{ status: 'pending' }}

  subject { InvoicesFeedService::BuildInvoicesFeed }

  it 'calls the service interactors' do
    expect(InvoicesFeedService::FetchUserInvoices).to receive(:call!)
    expect(InvoicesFeedService::FilterInvoicesByStatus).to receive(:call!)
    expect(InvoicesFeedService::PaginateInvoices).to receive(:call!)

    subject.call(user: user, limit: limit, offset: offset, filters: filters)
  end
end
