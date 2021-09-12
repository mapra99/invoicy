class ClientLocation < ApplicationRecord
  belongs_to :client
  belongs_to :location

  validates :location_id, uniqueness: { scope: :client_id, message: "already exists for that client" }
end
