class UserClient < ApplicationRecord
  belongs_to :client
  belongs_to :user

  validates :client_id, uniqueness: { scope: :user_id, message: "already exists for that user" }
end
