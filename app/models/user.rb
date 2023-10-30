class User < ApplicationRecord
  scope :sorted_by_name, ->{order(:name)}
  validates :name, presence: true, length: {maximum: Settings.max_name_length}
  validates :email, presence: true,
    length: {maximum: Settings.max_email_length},
    format: {with: Regexp.new(Settings.email_regex)},
    uniqueness: {case_sensitive: Settings.case_sensitive_email}
  has_secure_password
end
