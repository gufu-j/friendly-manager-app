class OrderSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :date, :note, :status, :store_id, :product_id
end
