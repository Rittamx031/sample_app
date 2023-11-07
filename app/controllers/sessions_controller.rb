class SessionsController < ApplicationController
  before_action :check_user, only: :create
  def new; end

  def create
    if @user.try(:authenticate, params.dig(:session, :password))
      reset_session # Reset the session to prevent session fixation attacks
      log_in(@user) # Custom method to log in the user
      if params.dig(:session, :remember_me)
        remember(@user)
      else
        forget(@user)
      end
      redirect_back_or user
    else
      flash.now[:danger] = t("invalid_email_password_combination")
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    log_out # Custom method to log out the user
    redirect_to root_path, notice: t("logged_out")
  end

  private

  def check_user
    @user = User.find_by(email: params.dig(:session, :email)&.downcase)
    return if @user

    flash.now[:danger] = t("not_found_user")
    render :new, status: :unprocessable_entity
  end
end
