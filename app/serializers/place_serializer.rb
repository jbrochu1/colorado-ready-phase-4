class PlaceSerializer < ActiveModel::Serializer
  attributes :name, :address, :category, :image, :hours, :elevation, :kid_friendly
  has_many :contents
end
