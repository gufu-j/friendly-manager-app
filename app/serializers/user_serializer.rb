class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :stores
end
