class Currency < ApplicationRecord
  DEFAULT_CURRENCY_ABBREVIATION = 'USD'.freeze

  has_many :invoices, dependent: :nullify
  has_many :invoice_items, dependent: :nullify
  has_many :items, dependent: :nullify

  validates :abbreviation, presence: true, uniqueness: true
  validates :name, presence: true

  scope :default_currency, -> { find_by(abbreviation: DEFAULT_CURRENCY_ABBREVIATION) }

  def formatted(value)
    if min_size >= 0
      rounded_value = value.round
    else
      floor_rounding = value % min_size
      ceil_rounding = min_size - floor_rounding

      should_ceil = ceil_rounding < floor_rounding
      rounded_value = should_ceil ? value + ceil_rounding : value - floor_rounding
    end

    "#{symbol} #{rounded_value}"
  end
end
