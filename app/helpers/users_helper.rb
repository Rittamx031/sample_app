module UsersHelper
  def gravatar_for user
    gravatar_url = Settings.image_user
    image_tag gravatar_url, alt: user.name, class: "gravatar"
  end
end
