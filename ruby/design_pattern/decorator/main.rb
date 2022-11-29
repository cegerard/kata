require './dark_roast'
require './steamed_milk'
require './mocha'
require './soy'
require './whip'

beverage = DarkRoast.new

puts beverage.description
puts beverage.cost

condiment = SteamedMilk.new(beverage)

puts condiment.description
puts condiment.cost


b2 = Whip.new(Mocha.new(condiment))
puts b2.description
puts b2.cost