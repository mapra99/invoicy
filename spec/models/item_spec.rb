require 'rails_helper'

RSpec.describe Item, type: :model do
  subject { create(:item) }

  describe 'validations' do
    it { should validate_uniqueness_of(:name).scoped_to(:user_id) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:standard_unit_price) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:invoice_items) }
    it { should have_many(:invoices) }
    it { should belong_to(:currency).optional }
  end
end
