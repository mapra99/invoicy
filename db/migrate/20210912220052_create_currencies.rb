class CreateCurrencies < ActiveRecord::Migration[6.1]
  def change
    create_table :currencies do |t|
      t.string :name
      t.string :abbreviation, null: false
      t.string :symbol, default: '$'
      t.float :min_size, default: 0.01

      t.timestamps
    end

    add_index :currencies, :abbreviation, unique: true
  end
end
