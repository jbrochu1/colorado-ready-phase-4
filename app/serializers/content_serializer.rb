class ContentSerializer < ActiveModel::Serializer
  attributes :id, :place_id, :user_id, :comment, :rating
  has_one :place
  has_one :user
end
