class AddSlugToClients < ActiveRecord::Migration[6.1]
  def change
    add_column :clients, :slug, :string, null: false
    add_index :clients, :slug, unique: true
  end
end
