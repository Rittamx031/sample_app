class UserMailer < ApplicationMailer
  def account_activation user
    @user = user
    mail to: user.email, subject: t("email_activation.intro")
  end

  def password_reset user
    @user = user
    mail to: user.email, subject: t("password_reset.title")
  end
end
