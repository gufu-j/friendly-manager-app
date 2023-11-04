class OrderSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :note, :product_name, :created_at, :updated_at

  def product_name
    object.product.name
  end 

  belongs_to :store
  belongs_to :product
  
end
