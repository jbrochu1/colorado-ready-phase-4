class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :category, :image, :hours, :elevation, :kid_friendly
  has_many :contents
  # has_many :users
end
