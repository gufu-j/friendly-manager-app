class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :admin 

  has_one :store
end
