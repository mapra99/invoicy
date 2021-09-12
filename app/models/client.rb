class Client < ApplicationRecord
  has_many :emails, class_name: 'ClientEmail', dependent: :destroy
  has_many :client_locations, dependent: :destroy
  has_many :locations, through: :client_locations

  validates :name, presence: true, uniqueness: true
end
