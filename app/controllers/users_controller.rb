class UsersController < ApplicationController
  def new
  end

  def create
    user = User.new(user_params)
    if user.save
      login_user!(user)
    else
      flash.now[:errors] = user.errors.full_messages
      render :new
    end
  end

  def show
  end
end
