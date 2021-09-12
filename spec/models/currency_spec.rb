require 'rails_helper'

RSpec.describe Currency, type: :model do
  subject { create(:currency) }

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:abbreviation) }
    it { should validate_uniqueness_of(:abbreviation) }
  end

  describe 'associations' do
    it { should have_many(:invoices) }
    it { should have_many(:invoice_items) }
    it { should have_many(:items) }
  end
end
