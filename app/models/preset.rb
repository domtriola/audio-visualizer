class Preset < ActiveRecord::Base
  validates :name, :user, :effect, :red, :green, :blue, presence: true
  belongs_to :user
end
