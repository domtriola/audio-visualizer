# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create!(username: "Demo", password: "password")
Preset.create!(name: "Green Bar", user_id: u1.id, effect: "Equalizer",
               red: 100, green: 200, blue: 20)
Preset.create!(name: "Sea Ripples", user_id: u1.id, effect: "Ripples",
               red: 29, green: 217, blue: 134)
Preset.create!(name: "Orange Bar", user_id: u1.id, effect: "Equalizer",
               red: 208, green: 85, blue: 27)
Preset.create!(name: "Full Range Ripples", user_id: u1.id, effect: "Ripples",
               red: 255, green: 255, blue: 255)
