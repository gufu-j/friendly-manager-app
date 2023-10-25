class CreateStores < ActiveRecord::Migration[6.1]
  def change
    create_table :stores do |t|
      t.integer :user_id
      t.string :location
      t.string :phone_number

      t.timestamps
    end
  end
end
