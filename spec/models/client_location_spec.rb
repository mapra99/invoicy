require 'rails_helper'

RSpec.describe ClientLocation, type: :model do
  subject { create(:client_location) }

  describe "validations" do
    it { should validate_uniqueness_of(:location_id).scoped_to(:client_id).with_message("already exists for that client") }
  end

  describe "associations" do
    it { should belong_to(:location) }
    it { should belong_to(:client) }
  end
end
