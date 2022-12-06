class CreatePlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :places do |t|
      t.string :name
      t.string :address
      t.string :category
      t.string :image
      t.string :hours
      t.integer :elevation
      t.boolean :kid_friendly

      t.timestamps
    end
  end
end
