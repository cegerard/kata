require './condiment_decorator'

class SteamedMilk < CondimentDecorator

  public_class_method :new

  def initialize(beverage)
    super(beverage)

    @description = 'Steamed Milk'
  end

  def cost
    (0.10 + @beverage.cost).round(2)
  end

end