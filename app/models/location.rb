class Location < ApplicationRecord
  has_many :user_locations, dependent: :destroy
  has_many :users, through: :user_locations
  has_many :client_locations, dependent: :destroy
  has_many :clients, through: :client_locations
end
