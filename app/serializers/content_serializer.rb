class ContentSerializer < ActiveModel::Serializer
  attributes :place_id, :user_id, :comment, :rating
  has_one :place
  has_one :user
end
