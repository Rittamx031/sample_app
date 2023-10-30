class UsersController < ApplicationController
  before_action :logged_in_user, only: %i(edit update)
  before_action :load_user, only: %i(show edit update destroy)
  before_action :admin_user, only: %i(destroy)

  def index
    @users = User.sorted_by_name
  end

  def show
    @page, @feed_items = pagy(@user.microposts.recent_posts,
                              items: Settings.items_in_page)
  end

  def new
    @user = User.new
  end

  def edit; end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.send_activation_email
      flash[:info] = t("checkmail")
      reset_session
      log_in @user
      flash[:success] = t("success_sign_up")
      redirect_to @user
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @user.update user_params
      flash[:success] = t("update_success")
      log_out if current_user?(@user)
      redirect_to @user
    else
      render :edit
    end
  end

  def destroy
    if @user.destroy
      flash[:success] = t("user_deleted")
    else
      flash[:danger] = t("delete_fail")
    end
    redirect_to users_path
  end

  private

  def load_user
    @user = User.find_by(id: params[:id])
    return if @user

    flash[:warning] = t("not_found_user")
    redirect_to root_path
  end

  def user_params
    params.require(:user).permit(:name, :email, :password,
                                 :password_confirmation)
  end

  def logged_in_user
    return if logged_in?

    store_location
    flash[:danger] = t("back_to_login")
    redirect_to login_url
  end

  def admin_user
    return if current_user.admin?

    redirect_to root_path
  end

  def correct_user
    return if current_user?(@user)

    flash[:error] = t("not_correct_user")
    redirect_to root_path
  end
end
