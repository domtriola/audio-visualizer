class CreatePresets < ActiveRecord::Migration
  def change
    create_table :presets do |t|
      t.integer :user_id, null: false, index: true
      t.string :name, null: false, index: true
      t.integer :red, null: false
      t.integer :green, null: false
      t.integer :blue, null: false

      t.timestamps null: false
    end
  end
end
