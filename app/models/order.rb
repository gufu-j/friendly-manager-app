class Order < ApplicationRecord
    belongs_to :store
    belongs_to :product

    validates :quantity, presence: true
    # validates :note, presence: true
    validate :orders_per_day_unic

    def orders_per_day_unic
        existing = Order.where(product_id: self.product_id).where(store_id: self.store_id).where(created_at: Date.current.all_day)
        errors.add(:product_id, 'you have already created this product today, go to your orders, check it out and edit it if you wish to order more') if !existing.empty?
    end

    # def order_repit
    #     existing = Order.where(product_id: self.product_id).where(created_at: Time.current.all_day)
    #     errors.add(:name, 'you already order this today, check orders and edit it') if existing
    # end

end
