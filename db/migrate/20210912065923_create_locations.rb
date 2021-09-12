class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :country
      t.string :state
      t.string :city
      t.string :postcode
      t.string :street_address

      t.timestamps
    end
  end
end
