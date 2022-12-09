class Place < ApplicationRecord
    has_many :contents, dependent: :destroy
    has_many :users, through: :contents
    belongs_to :user

    validates :name, presence: true
end
