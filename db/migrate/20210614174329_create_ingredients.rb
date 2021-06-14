class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :protein
      t.integer :weight
      t.integer :price

      t.timestamps
    end
  end
end
