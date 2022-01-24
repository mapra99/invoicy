require 'rails_helper'

RSpec.describe Client, type: :model do
  subject { create(:client) }

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name) }
    it { should validate_presence_of(:slug) }
    it { should validate_uniqueness_of(:slug) }
  end

  describe 'associations' do
    it { should have_many(:emails) }
    it { should have_many(:locations) }
    it { should have_many(:user_clients) }
    it { should have_many(:users) }
    it { should have_many(:invoices) }
    it { should have_many(:email_communications) }
  end

  context 'hooks' do
    describe '#set_slug' do
      it 'assigns a slug parsing the clients name to snake case' do
        client = create(:client, name: 'A client Name')
        expect(client.slug).to eq('a_client_name')
      end

      it 'parses any non-word character to underscore' do
        client = create(:client, name: "McDonald's house")
        expect(client.slug).to eq('mc_donald_s_house')
      end

      it 'persists custom slug if passed one' do
        client = create(:client, slug: 'custom_slug')
        expect(client.slug).to eq('custom_slug')
      end
    end
  end
end
