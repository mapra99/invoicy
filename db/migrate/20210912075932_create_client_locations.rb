class CreateClientLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :client_locations do |t|
      t.references :client, null: false, foreign_key: true
      t.references :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
