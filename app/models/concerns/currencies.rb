module Currencies
  extend ActiveSupport::Concern

  included do
    before_save :set_default_currency
  end

  private

  def set_default_currency
    return if currency.present?

    self.currency = Currency.default_currency
  end
end
