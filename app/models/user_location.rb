class UserLocation < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :location_id, uniqueness: { scope: :user_id, message: "already exists for that user" }
end
