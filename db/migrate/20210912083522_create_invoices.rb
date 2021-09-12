class CreateInvoices < ActiveRecord::Migration[6.1]
  def change
    create_table :invoices do |t|
      t.references :user, null: false, foreign_key: true
      t.references :client, null: true, foreign_key: true
      t.string :uuid
      t.string :name
      t.datetime :issue_date
      t.datetime :due_date
      t.float :total_price
      t.integer :status, null: false, default: 0 # enum

      t.timestamps
    end

    add_index :invoices, :uuid
    add_index :invoices, [:uuid, :user_id]
    add_index :invoices, [:uuid, :client_id]
    add_index :invoices, [:uuid, :user_id, :client_id], unique: true
  end
end
