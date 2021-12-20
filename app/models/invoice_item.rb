class InvoiceItem < ApplicationRecord
  include Currencies

  belongs_to :invoice
  belongs_to :item
  belongs_to :currency, optional: true

  validates :invoice_id, uniqueness: { scope: :item_id }
  validates_presence_of :quantity, :fixed_unit_price, :total_price
end
