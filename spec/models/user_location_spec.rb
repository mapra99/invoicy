require 'rails_helper'

RSpec.describe UserLocation, type: :model do
  subject { create(:user_location) }

  describe "validations" do
    it { should validate_uniqueness_of(:location_id).scoped_to(:user_id).with_message("already exists for that user") }
  end

  describe "associations" do
    it { should belong_to(:location) }
    it { should belong_to(:user) }
  end
end
