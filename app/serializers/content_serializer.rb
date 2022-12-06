class ContentSerializer < ActiveModel::Serializer
  attributes :place_id, :user_id, :comment, :rating
  has_many :places
end
