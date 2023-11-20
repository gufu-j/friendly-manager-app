class User < ApplicationRecord
    has_secure_password

    validates :username, :password, :password_confirmation, :email, presence: true


    has_one :store



end
