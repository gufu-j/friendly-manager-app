class StoreSerializer < ActiveModel::Serializer
  attributes :id, :phone_number, :location, :user_id

  has_many :orders
  has_many :organized_orders
  has_many :products, through: :orders

  belongs_to :user

  # def valid_user
  #   object.user.admin
  # end


  def organized_orders
    object.orders.order(:created_at).reverse
  end



end
