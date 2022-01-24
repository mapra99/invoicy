class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :user_locations, dependent: :destroy
  has_many :locations, through: :user_locations
  has_many :user_clients, dependent: :destroy
  has_many :clients, through: :user_clients
  has_many :invoices, dependent: :destroy
  has_many :items, dependent: :destroy
  has_many :email_communications, as: :target

  validates :name, presence: true
end
