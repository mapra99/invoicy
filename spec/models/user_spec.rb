require 'rails_helper'

RSpec.describe User, type: :model do
  subject { create(:user) }

  describe "validations" do
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:email).case_insensitive }
    it { should validate_presence_of(:password) }
  end
end
