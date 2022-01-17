class AddExternalIdToInvoices < ActiveRecord::Migration[6.1]
  def change
    add_column :invoices, :external_id, :string
    add_index :invoices, :external_id, unique: true
  end
end
