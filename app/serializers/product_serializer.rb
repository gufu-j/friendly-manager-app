class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name

  
  has_many :orders
  has_many :stores, through: :orders

end
