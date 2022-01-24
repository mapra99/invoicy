class Client < ApplicationRecord
  has_many :emails, class_name: 'ClientEmail', dependent: :destroy
  has_many :client_locations, dependent: :destroy
  has_many :locations, through: :client_locations
  has_many :user_clients, dependent: :destroy
  has_many :users, through: :user_clients
  has_many :invoices, dependent: :nullify
  has_many :email_communications, through: :emails

  validates :name, presence: true, uniqueness: true
  validates :slug, presence: true, uniqueness: true

  before_validation :set_slug, on: :create

  private

  def set_slug
    return if slug.present?

    self.slug = name.gsub(/\W+/, '_').underscore
  end
end
