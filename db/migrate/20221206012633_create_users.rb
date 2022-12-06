class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :location
      t.integer :age
      t.string :username
      t.string :avatar_img
      t.string :password_digest

      t.timestamps
    end
  end
end
