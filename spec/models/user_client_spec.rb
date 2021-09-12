require 'rails_helper'

RSpec.describe UserClient, type: :model do
  subject { create(:user_client) }

  describe "validations" do
    it { should validate_uniqueness_of(:client_id).scoped_to(:user_id).with_message("already exists for that user") }
  end

  describe "associations" do
    it { should belong_to(:client) }
    it { should belong_to(:user) }
  end
end
