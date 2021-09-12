class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :name, presence: true

  has_many :user_locations, dependent: :destroy
  has_many :locations, through: :user_locations
  has_many :user_clients, dependent: :destroy
  has_many :clients, through: :user_clients
  has_many :invoices, dependent: :destroy
end
