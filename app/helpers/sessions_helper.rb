module SessionsHelper
  def log_in user
    session[:user_id] = user.id
    @current_user = user
  end

  # Returns the current logged-in user (if any).
  def current_user
    if (user_id = session[:user_id])
      @current_user ||= User.find_by(id: user_id)
    elsif (user_id = cookies.signed[:user_id])
      user = User.find_by(id: user_id)
      if user&.authenticated?(cookies[:remember_digest])
        log_in user
        @current_user = user
      end
    end
    @current_user
  end

  def logged_in?
    current_user.present?
  end

  def log_out
    reset_session
    @current_user = nil
  end

  def remember user
    user.remember
    cookies.permanent.signed[:user_id] = user.id
    cookies.permanent[:remember_token] = user.remember_digest
  end

  def forget user
    user.forget
  end
end
