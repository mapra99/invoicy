class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.float :standard_unit_price
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end

    add_index :items, %i[name user_id], unique: true
  end
end
