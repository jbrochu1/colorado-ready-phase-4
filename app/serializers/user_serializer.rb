class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :location, :age, :username, :avatar_img
  has_many :places
end
