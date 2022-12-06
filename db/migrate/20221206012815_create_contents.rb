class CreateContents < ActiveRecord::Migration[7.0]
  def change
    create_table :contents do |t|
      t.string :comment
      t.integer :rating
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :place, null: false, foreign_key: true

      t.timestamps
    end
  end
end
