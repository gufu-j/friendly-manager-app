class Store < ApplicationRecord

    has_many :orders
    has_many :products, through: :orders

    validates :location, :phone_number, presence: true

    belongs_to :user
end
