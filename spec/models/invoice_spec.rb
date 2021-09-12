require 'rails_helper'

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
      it { should validate_uniqueness_of(:uuid).scoped_to(:user_id, :client_id) }
    end

    context 'for a draft invoice' do
      subject { create(:draft_invoice) }

      it { should validate_presence_of(:status) }
    end
  end

  describe 'associations' do
    it { should belong_to(:client).optional }
    it { should belong_to(:user) }
  end

  context 'hooks' do
    describe '#set_uuid' do
      it 'assigns a uuid based on the client slug and an incremental counter' do
        user = create(:user)
        client = create(:client, slug: 'client_slug')
        invoice = create(:invoice, user: user, client: client)
        expect(invoice.uuid).to eq('client_slug_1')
      end

      it 'increases the counter on a user - client basis' do
        user = create(:user)
        client = create(:client, slug: 'client_slug')
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
    end
  end
end