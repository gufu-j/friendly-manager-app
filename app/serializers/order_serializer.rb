class OrderSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :note, :status, :store_id, :product_name, :created_at

  def product_name
    object.product.name
  end 
  
end
