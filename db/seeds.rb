require 'json'

s = File.read("db/ingredients.json")

obj = JSON.parse(s)
obj.each do |external|
  external[1].each do |internal|
    Ingredient.create!(name: internal["name"], price: internal["price"], weight: internal["weight"], protein: internal["protein"], img: internal["img"])
  puts Ingredient.last.name
  end
end

user = User.new
user.email = 'test@example.com'
user.password = 'prilep'
user.save!

10.times do |_|
  Dose.create!(ingredient_id: rand(6), amount: rand(10), user_id: 1)
end

puts "Database seeded"
