class User < ApplicationRecord
  attr_accessor :remember_digest

  scope :sorted_by_name, ->{order(:name)}

  validates :password, presence: true,
    length: {minimum: Settings.min_length_password}, allow_nil: true
  validates :name, presence: true, length: {maximum: Settings.max_name_length}
  validates :email, presence: true,
    length: {maximum: Settings.max_email_length},
    format: {with: Regexp.new(Settings.email_regex)},
    uniqueness: {case_sensitive: Settings.case_sensitive_email}

  has_secure_password

  def self.digest string
    cost = if ActiveModel::SecurePassword.min_cost
             BCrypt::Engine::MIN_COST
           else
             BCrypt::Engine.cost
           end
    BCrypt::Password.create string, cost:
  end

  def self.new_token
    SecureRandom.urlsafe_base64
  end

  def remember
    self.remember_digest = User.new_token
    update_column :remember_digest,
                  User.digest(remember_digest)
  end

  def authenticated? remember_token
    BCrypt::Password.new(remember_digest).is_password? remember_token
  end

  def forget
    update_column :remember_digest, nil
  end
end
