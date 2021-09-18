require 'rails_helper'

describe InvoicesFeedService::FetchUserInvoices do
  subject { InvoicesFeedService::FetchUserInvoices }

  let(:user) { create(:user) }
  let(:user_invoices) { create_list(:invoice, 20, user: user) }
  let!(:other_invoices) { create_list(:invoice, 20) }

  describe 'when given a user in the context' do
    let(:context) { subject.call(user: user) }

    it 'succeeds' do
      expect(context.success?).to eq true
    end

    it 'returns all the user invoices' do
      expect(context.invoices).to match_array(user_invoices)
    end
  end

  describe 'when no user is given' do
    let(:context) { subject.call }

    it 'fails' do
      expect(context.success?).to eq false
    end
  end
end
