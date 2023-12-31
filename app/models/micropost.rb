class Micropost < ApplicationRecord
  belongs_to :user
  has_one_attached :picture do |attachable|
    attachable.variant :display,
                       resize_to_limit: [Settings.wight_size_500,
    Settings.high_size_500]
  end
  scope :newest, ->{order(created_at: :desc)}
  scope :relate_post, ->(user_ids){where user_id: user_ids}
  validates :user_id, presence: true
  validates :content, presence: true, length: {maximum: Settings.digit_140}
  validates :picture,
            content_type: {
              in: %w(image/jpeg image/gif image/png),
              message: I18n.t("micropost.validimage")
            },
            size: {
              less_than: Settings.limit_store_size.megabytes,
              message: I18n.t("micropost.oversize")
            }
end
