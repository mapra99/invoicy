class AddTotalPriceToInvoiceItems < ActiveRecord::Migration[6.1]
  def change
    add_column :invoice_items, :total_price, :float
  end
end
