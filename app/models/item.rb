class Item < ApplicationRecord
  include Currencies

  belongs_to :user
  belongs_to :currency, optional: true
  has_many :invoice_items, dependent: :destroy
  has_many :invoices, through: :invoice_items

  validates :name, presence: true, uniqueness: { scope: :user_id }
  validates :standard_unit_price, presence: true
end
