require 'rails_helper'
require 'support/shared/paginated_model'
require 'support/shared/currencies_model'

RSpec.describe Invoice, type: :model do
  subject { create(:invoice) }

  describe 'validations' do
    context 'for a fully filled invoice' do
      subject { create(:invoice) }

      it { should validate_presence_of(:name) }
      it { should validate_presence_of(:issue_date) }
      it { should validate_presence_of(:due_date) }
      it { should validate_presence_of(:total_price) }
      it { should validate_presence_of(:status) }
      it { should validate_uniqueness_of(:uuid).scoped_to(:user_id) }
    end

    context 'for a draft invoice' do
      subject { create(:draft_invoice) }

      it { should validate_presence_of(:status) }
    end
  end

  describe 'associations' do
    it { should belong_to(:client).optional }
    it { should belong_to(:user) }
    it { should have_many(:invoice_items) }
    it { should have_many(:items) }
    it { should belong_to(:currency).optional }
    it { should belong_to(:user_location).optional }
    it { should belong_to(:client_location).optional }
    it { should belong_to(:client_email).optional }
  end

  context 'hooks' do
    let(:user) { create(:user) }
    let(:client) { create(:client, slug: 'client_slug') }
    let(:invoice) { create(:invoice, user: user, client: client) }

    describe '#set_uuid' do
      it 'assigns a uuid based on the client slug and an incremental counter' do
        expect(invoice.uuid).to eq('client_slug_1')
      end

      it 'increases the counter on a user - client basis' do
        invoice1 = create(:invoice, user: user, client: client)
        expect(invoice1.uuid).to eq('client_slug_1')

        invoice2 = create(:invoice, user: user, client: client)
        expect(invoice2.uuid).to eq('client_slug_2')
      end

      it 'persists custom uuid if passed one' do
        invoice = create(:invoice, uuid: 'inv-001')
        expect(invoice.uuid).to eq('inv-001')
      end

      it 'doesnt set an uuid if client is blank' do
        invoice = create(:draft_invoice, client: nil)
        expect(invoice.uuid).to be_blank
      end

      it 'increases the counter until being valid' do
        create_list(:invoice, 2, user: user, client: client)
        create(:invoice, user: user, client: client, uuid: 'client_slug_4')
        invoice4 = create(:invoice, user: user, client: client)

        expect(invoice4.uuid).to eq('client_slug_5')
      end
    end

    describe '#set_external_id' do
      it 'assigns a randomly generated external_id' do
        expect(invoice.external_id).not_to be_nil
      end
    end
  end

  context 'pagination' do
    subject { Invoice }
    let!(:invoices) { create_list(:invoice, 20) }

    it_should_behave_like 'paginated model'
  end

  describe '#draft?' do
    let(:draft_invoice) { create(:draft_invoice) }
    let(:finished_invoice) { create(:invoice) }

    it 'returns true if invoice is draft' do
      expect(draft_invoice.draft?).to eq true
    end

    it 'returns false if invoice is not draft' do
      expect(finished_invoice.draft?).to eq false
    end
  end

  include_examples 'currencies concern', :invoice
end
