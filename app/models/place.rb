class Place < ApplicationRecord
    has_many :contents
    has_many :users#, through: :contents
    # belongs_to :user
end
