class User < ApplicationRecord
  validates :name, presence: true, length: {maximum: 10}
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: {maximum: 255},
  uniqueness: {case_sensitive: false}, format: {with: VALID_EMAIL_REGEX}
  has_secure_password
end
