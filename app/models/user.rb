class User < ApplicationRecord
  has_many :microposts, class_name: Micropost.name, dependent: :destroy
  before_save :downcase_email
  before_create :create_activation_digest

  scope :sorted_by_name, ->{order(:name)}

  validates :name, presence: true, length: {maximum: Settings.max_name_length}
  validates :email, presence: true, length: {maximum: Settings.max_email_length},
                    format: {with: Regexp.new(Settings.email_regex)},
                    uniqueness: {case_sensitive: Settings.case_sensitive_email}
  validates :password, presence: true,
  length: {minimum: Settings.min_length_password}, allow_nil: true

  has_secure_password

  attr_accessor :remember_token, :activation_token, :reset_token

  class << self
    def User.digest string
      cost = if ActiveModel::SecurePassword.min_cost
               BCrypt::Engine::MIN_COST
             else
               BCrypt::Engine.cost
             end
      BCrypt::Password.create(string, cost:)
    end

    def new_token
      SecureRandom.urlsafe_base64
    end
  end

  def remember
    self.remember_token = User.new_token
    update_column :remember_digest, User.digest(remember_token)
  end

  def forget
    update_column :remember_digest, nil
  end

  def activate
    update_columns activated: true, activated_at: Time.zone.now
  end

  def send_activation_email
    UserMailer.account_activation(self).deliver_now
  end

  def authenticated? attribute, token
    digest = send("#{attribute}_digest")
    return false if digest.nil?

    BCrypt::Password.new(digest).is_password?(token)
  end

  def create_reset_digest
    self.reset_token = User.new_token
    update_columns(reset_digest: User.digest(reset_token),
                   reset_sent_at: Time.zone.now)
  end

  def reset_activation_digest
    self.activation_token = User.new_token
    update_columns(activation_digest: User.digest(activation_token))
  end

  def send_password_reset_email
    UserMailer.password_reset(self).deliver_later
  end

  def password_reset_expired?
    reset_sent_at > Settings.timeout.hours.ago
  end

  def feed
    microposts
  end
  private

  def downcase_email
    email.downcase!
  end

  def create_activation_digest
    self.activation_token = User.new_token
    self.activation_digest = User.digest(activation_token)
  end
end
