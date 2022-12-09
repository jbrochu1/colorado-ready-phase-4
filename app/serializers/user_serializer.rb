class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :location, :age, :username, :avatar_img, :places, :contents
  has_many :places
  has_many :contents
end
