require 'rails_helper'

RSpec.describe ClientEmail, type: :model do
  subject { create(:client_email) }

  describe "validations" do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).scoped_to(:client_id).case_insensitive }
  end

  describe "associations" do
    it { should belong_to(:client) }
  end
end
