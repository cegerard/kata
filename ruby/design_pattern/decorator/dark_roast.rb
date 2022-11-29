require './beverage'

class DarkRoast < Beverage

  public_class_method :new

  def initialize
    @description = 'Dark Roast'
  end

  def cost
    0.99
  end

end