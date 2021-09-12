class ClientEmail < ApplicationRecord
  belongs_to :client

  validates :email, presence: true, uniqueness: { scope: :client_id, case_sensitive: false }
end
