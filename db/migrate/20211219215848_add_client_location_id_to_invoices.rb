class AddClientLocationIdToInvoices < ActiveRecord::Migration[6.1]
  def change
    add_reference :invoices, :client_location, foreign_key: true
  end
end
