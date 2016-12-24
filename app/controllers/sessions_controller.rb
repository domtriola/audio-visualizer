class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(user_params[:username],
                                    user_params[:password])
    if user
      login_user!(user)
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end
