class AddCategoryToDrinks < ActiveRecord::Migration[5.0]
  def change
    add_reference :drinks, :category, foreign_key: true
  end
end
