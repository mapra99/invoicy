require 'rails_helper'

RSpec.describe Location, type: :model do
  describe "associations" do
    it { should have_many(:user_locations) }
    it { should have_many(:users) }

    it { should have_many(:client_locations) }
    it { should have_many(:clients) }
  end
end
