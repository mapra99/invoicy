class AddUserLocationIdToInvoices < ActiveRecord::Migration[6.1]
  def change
    add_reference :invoices, :user_location, foreign_key: true
  end
end
