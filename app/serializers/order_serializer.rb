class OrderSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :note, :product_name, :store_name, :store_number, :created_at

  def product_name
    object.product.name
  end 

  def store_name
    object.store.location
  end
  
  def store_number
    object.store.id
  end

  # def reversed_orders_back_end
  #   Order.order(:created_at).reverse
  # end


  belongs_to :store
  belongs_to :product
 

end
