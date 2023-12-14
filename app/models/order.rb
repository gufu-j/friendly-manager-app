class Order < ApplicationRecord
    belongs_to :store
    belongs_to :product

    validates :quantity, presence: true
    # validates :note, presence: true
    validate :orders_per_day_unic, on: :create

    def orders_per_day_unic
        existing = Order.where(product_id: self.product_id).where(store_id: self.store_id).where(created_at: Date.current.all_day)
        errors.add(:product_id, 'has already been created today, check it out on your orders and edit it if you wish to order more') if !existing.empty?
    end


end
