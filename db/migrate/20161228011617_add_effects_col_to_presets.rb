class AddEffectsColToPresets < ActiveRecord::Migration
  def change
    add_column :presets, :effect, :string
  end
end
