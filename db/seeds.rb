require 'json'

s = File.read("db/ingredients.json")

obj = JSON.parse(s)

obj.each do |external|
  external[1].each do |internal|
    p internal["name"]
  end
end

# Ingredient.create(name: "Hampf Samen", price: 20, weight: 12, protein: 20)
