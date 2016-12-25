class Preset < ActiveRecord::Base
  validates :name, :user, :red, :green, :blue, presence: true
  belongs_to :user
end
