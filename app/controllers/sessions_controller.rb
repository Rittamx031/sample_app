class SessionsController < ApplicationController
  def new
    # Render the login form
  end

  def create
    user = User.find_by(email: params.dig(:session, :email)&.downcase)
    if user&.authenticate(params.dig(:session, :password))
      reset_session # Reset the session to prevent session fixation attacks
      log_in(user) # Custom method to log in the user
      redirect_to user, status: :see_other
    else
      flash.now[:danger] = t("invalid_email_password_combination")
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    log_out # Custom method to log out the user
    redirect_to root_path, notice: t("logged_out")
  end
end
