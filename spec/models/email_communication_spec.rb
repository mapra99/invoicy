require 'rails_helper'

RSpec.describe EmailCommunication, type: :model do
  subject { create(:email_communication) }

  describe 'validations' do
    it { should validate_presence_of(:sender) }
    it { should validate_presence_of(:recipient) }
    it { should validate_presence_of(:subject) }
    it { should validate_presence_of(:template_id) }
    it { should validate_presence_of(:template_data) }
  end

  describe 'associations' do
    it { should belong_to(:communication) }
  end
end
