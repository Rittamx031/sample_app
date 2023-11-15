module UsersHelper
  def gravatar_for user, options = {size: Settings.options_size_image}
    gravatar_id = Digest::MD5.hexdigest(user.email.downcase)
    size = options[:size]
    gravatar_url = Settings.image_user
    image_tag gravatar_url, alt: user.name, class: "gravatar"
  end

  def create_relationship current_user
    current_user.active_relationships.build
  end

  def find_relationship current_user
    current_user.active_relationships.find_by(followed_id: @user.id)
  end
end
