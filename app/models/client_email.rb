class ClientEmail < ApplicationRecord
  belongs_to :client
  has_many :email_communications, as: :target

  validates :email, presence: true, uniqueness: { scope: :client_id, case_sensitive: false }
end
