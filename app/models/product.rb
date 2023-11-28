class Product < ApplicationRecord
    has_many :orders
    has_many :stores, through: :orders

    validates :name, presence: true
    validates_uniqueness_of :name, :case_sensitive => false

end
