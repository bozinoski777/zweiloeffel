require 'json'

s = File.read("db/ingredients.json")

obj = JSON.parse(s)

obj.each do |ingredient|
  ingredient.each do |stuff|
    puts stuff
  end
end

# Ingredient.create(name: "Hampf Samen", price: 20, weight: 12, protein: 20)
