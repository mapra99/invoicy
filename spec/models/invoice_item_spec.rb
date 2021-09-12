require 'rails_helper'

RSpec.describe InvoiceItem, type: :model do
  subject { create(:invoice_item) }

  describe 'validations' do
    it { should validate_uniqueness_of(:invoice_id).scoped_to(:item_id) }
    it { should validate_presence_of(:quantity) }
    it { should validate_presence_of(:fixed_unit_price) }
  end

  describe 'associations' do
    it { should belong_to(:invoice) }
    it { should belong_to(:item) }
    it { should belong_to(:currency).optional }
  end
end
