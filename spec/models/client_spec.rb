require 'rails_helper'

RSpec.describe Client, type: :model do
  subject { create(:client) }

  describe "validations" do
    it { should validate_presence_of(:name) }
  end

  describe "associations" do
    it { should have_many(:emails) }
    it { should have_many(:locations) }
    it { should have_many(:user_clients) }
    it { should have_many(:users) }
  end
end
