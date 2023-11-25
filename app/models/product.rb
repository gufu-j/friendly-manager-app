class Product < ApplicationRecord
    has_many :orders
    has_many :stores, through: :orders

    validates :name, presence: true, uniqueness: true

end
