class Order < ApplicationRecord
    belongs_to :store
    belongs_to :product

    validates :quantity, presence: true
    # validates :note, presence: true

    

end
