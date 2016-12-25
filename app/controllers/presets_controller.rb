class PresetsController < ApplicationController
  before_action :ensure_logged_in

  def index
    presets = current_user.presets
    render json: presets
  end
end
