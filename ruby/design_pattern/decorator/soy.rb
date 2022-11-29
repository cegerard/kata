require './condiment_decorator'

class Soy < CondimentDecorator

  public_class_method :new

  def initialize(beverage)
    super(beverage)

    @description = 'Soy'
  end

  def cost
    (0.15 + @beverage.cost).round(2)
  end

end