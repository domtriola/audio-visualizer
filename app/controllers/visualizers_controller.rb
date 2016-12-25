class VisualizersController < ApplicationController
  def index
  end

  def presets
    render json: { "testing" => "test" }
  end
end
