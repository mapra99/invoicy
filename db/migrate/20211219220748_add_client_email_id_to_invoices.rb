class AddClientEmailIdToInvoices < ActiveRecord::Migration[6.1]
  def change
    add_reference :invoices, :client_email, foreign_key: true
  end
end
