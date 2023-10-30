class SessionsController < ApplicationController
  before_action :check_user, only: :create
  def new; end

  def create
    if @user.try(:authenticate, params.dig(:session, :password))
      handle_active_user
    else
      flash.now[:danger] = t("invalid_email_password_combination")
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    log_out
    redirect_to root_path, notice: t("logged_out")
  end

  def handle_active_user
    log_in(@user)
    if @user.activated
      reset_session
      remember @user
      params.dig(:session, :remember_me) ? remember(@user) : forget(@user)
    else
      @user.send_activation_email
      flash[:danger] = t("account_not_actived")
    end
    redirect_back_or(@user)
  end
  private

  def check_user
    @user = User.find_by(email: params.dig(:session, :email)&.downcase)
    return if @user

    flash.now[:danger] = t("not_found_user")
    render :new, status: :unprocessable_entity
  end
end
