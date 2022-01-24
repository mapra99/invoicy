require 'rails_helper'

RSpec.describe Communication, type: :model do
  subject { create(:communication) }

  describe 'validations' do
    it { should validate_presence_of(:topic) }
  end

  describe 'associations' do
    it { should have_many(:email_communications) }
  end
end
