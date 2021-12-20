class Currency < ApplicationRecord
  DEFAULT_CURRENCY_ABBREVIATION = 'USD'.freeze

  has_many :invoices, dependent: :nullify
  has_many :invoice_items, dependent: :nullify
  has_many :items, dependent: :nullify

  validates :abbreviation, presence: true, uniqueness: true
  validates :name, presence: true

  scope :default_currency, -> { find_by(abbreviation: DEFAULT_CURRENCY_ABBREVIATION) }
end
