class CreateClientEmails < ActiveRecord::Migration[6.1]
  def change
    create_table :client_emails do |t|
      t.references :client, null: false, foreign_key: true
      t.string :email, null: false

      t.timestamps
    end

    add_index :client_emails, [:client_id, :email], unique: true
    add_index :client_emails, :email
  end
end
