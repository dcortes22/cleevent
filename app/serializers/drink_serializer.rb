class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :category
end
