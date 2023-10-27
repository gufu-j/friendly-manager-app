class Product < ApplicationRecord
    has_many :products
    has_many :stores, through: :orders
end
