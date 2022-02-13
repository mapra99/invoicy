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

  describe '#formatted' do
    let(:currency) { create(:currency, symbol: '$', min_size: min_size) }
    let(:value) { 123_456.123456 }

    subject { currency.formatted(value) }

    describe 'when min_size is a decimal number' do
      let(:min_size) { 0.01 }

      describe 'when rounding down' do
        let(:value) { 123_456.123 }

        it { expect(subject).to eq('$ 123456.12') }
      end

      describe 'when rounding up' do
        let(:value) { 123_456.126 }

        it { expect(subject).to eq('$ 123456.13') }
      end
    end

    describe 'when min_size is an integer number' do
      let(:min_size) { 100 }

      describe 'when rounding down' do
        let(:value) { 123_426.123 }

        it { expect(subject).to eq('$ 123400') }
      end

      describe 'when rounding up' do
        let(:value) { 123_476.123 }

        it { expect(subject).to eq('$ 123500') }
      end
    end
  end
end
