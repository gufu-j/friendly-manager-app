class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :store_id
      t.integer :product_id
      t.integer :quantity
      t.boolean :status   
      t.string :date
      t.string :note

      t.timestamps
    end
  end
end
