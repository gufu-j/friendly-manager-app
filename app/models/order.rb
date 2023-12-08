class Order < ApplicationRecord
    belongs_to :store
    belongs_to :product

    validates :quantity, presence: true
    # validates :note, presence: true
    # validates :orders_per_day_unic

    # def orders_per_day_unic
    #     existing = Order.where(product_id: self.product_id).where(created_at: Date.current)
    #     errors.add(:product_id, 'cannot be today') if existing
    # end





    # def order_repit
        
    #     existing = Order.where(product_id: self.product_id).where(created_at: Time.current.all_day)
    #     errors.add(:name, 'you already order this today, check orders and edit it') if existing
    # end

end
