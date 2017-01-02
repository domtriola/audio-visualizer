class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login_user!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
    redirect_to root_url
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token! if logged_in?
    session[:session_token] = nil
  end

  def ensure_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def ensure_current_user
    redirect_to root_url unless current_user.id == params[:id].to_i
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
