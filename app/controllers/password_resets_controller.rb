class PasswordResetsController < ApplicationController
  before_action :load_user, :valid_user, :check_expiration,
                only: %i(edit update)

  def new; end

  def edit; end

  def create
    @user = User.find_by(email: params.dig(:password_reset, :email).downcase)
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
      flash[:info] = t("password_reset.email_sent")
      redirect_to root_url
    else
      flash.now[:danger] = t("password_reset.email_not_found")
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if user_params[:password].empty?
      @user.errors.add :password, t("cannot_empty")
      render :edit
    elsif @user.update(user_params)
      log_in @user
      @user.update_column :reset_digest, nil
      flash[:success] = t("password_reset_successfully")
      redirect_to @user
    else
      render :edit
    end
  end
  private

  def user_params
    params.require(:user).permit(:email, :password,
                                 :password_confirmation)
  end

  def load_user
    @user = User.find_by(email: params[:email])

    return if @user

    flash[:danger] = t("user_not_found")
    redirect_to root_url
  end

  def valid_user
    return if @user.activated && @user.authenticated?(:reset, params[:id])

    flash[:danger] = t("user_inactive")
    redirect_to root_url
  end

  def check_expiration
    return if @user.password_reset_expired?

    flash[:danger] = t("password_reset_expired")
    redirect_to new_password_reset_url
  end
end
