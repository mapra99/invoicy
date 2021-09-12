class InvoiceItem < ApplicationRecord
  belongs_to :invoice
  belongs_to :item

  validates :invoice_id, uniqueness: { scope: :item_id }
  validates_presence_of :quantity, :fixed_unit_price
end
