RSpec.shared_examples 'currencies concern' do |factory|
  let(:currency) { create(:currency) }
  let(:default_currency) { Currency.default_currency }

  context '#set_default_currency' do
    describe 'when having a specific currency defined' do
      subject { create(factory, currency: currency) }

      it 'is created with the given currency' do
        expect(subject.currency).to eq currency
      end
    end

    describe 'when not having a specific currency defined' do
      subject { create(factory, currency: nil) }

      it 'is created with a default currency' do
        expect(subject.currency).to eq default_currency
      end
    end
  end
end
