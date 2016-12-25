class PresetsController < ApplicationController
  before_action :ensure_logged_in

  def index
    all_presets = current_user.presets
    presets = {}
    all_presets.each do |preset|
      presets[preset.name] = preset
    end
    render json: presets
  end

  def create
    preset = Preset.new(preset_params)
    preset.user_id = current_user.id
    if preset.save
      render json: preset
    else
      flash[:errors] = preset.errors.full_messages
      redirect_to root_url
    end
  end

  private

  def preset_params
    params.require(:preset).permit(:name, :red, :green, :blue)
  end
end
