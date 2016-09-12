class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :last_name, :email

  has_many :drinks
end
