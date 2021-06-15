require 'json'

s = File.read("db/ingredients.json")

obj = JSON.parse(s)

obj.each do |external|
  external[1].each do |internal|
    Ingredient.create!(name: internal["name"], price: internal["price"], weight: internal["weight"], protein: internal["protein"])
  end
end

