class User < ApplicationRecord
    has_many :contents
    has_many :places, through: :contents

    has_secure_password

    validates_presence_of :username, :email
end
