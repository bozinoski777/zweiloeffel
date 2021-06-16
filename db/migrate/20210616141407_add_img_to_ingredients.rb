class AddImgToIngredients < ActiveRecord::Migration[6.0]
  def change
    add_column :ingredients, :img, :string
  end
end
