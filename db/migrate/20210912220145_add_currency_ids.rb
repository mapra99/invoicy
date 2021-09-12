class AddCurrencyIds < ActiveRecord::Migration[6.1]
  def change
    add_reference :invoices, :currency, index: true
    add_foreign_key :invoices, :currencies

    add_reference :invoice_items, :currency, index: true
    add_foreign_key :invoice_items, :currencies

    add_reference :items, :currency, index: true
    add_foreign_key :items, :currencies
  end
end
