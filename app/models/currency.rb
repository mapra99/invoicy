class Currency < ApplicationRecord
  has_many :invoices, dependent: :nullify
  has_many :invoice_items, dependent: :nullify
  has_many :items, dependent: :nullify

  validates :abbreviation, presence: true, uniqueness: true
  validates :name, presence: true
end
