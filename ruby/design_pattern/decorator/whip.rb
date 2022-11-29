require './condiment_decorator'

class Whip < CondimentDecorator

  public_class_method :new

  def initialize(beverage)
    super(beverage)

    @description = 'Whip'
  end

  def cost
    (0.10 + @beverage.cost).round(2)
  end

end