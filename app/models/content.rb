class Content < ApplicationRecord
  belongs_to :user
  belongs_to :place

  validates_presence_of :comment, :rating
end
