require './condiment_decorator'

class Mocha < CondimentDecorator

  public_class_method :new

  def initialize(beverage)
    super(beverage)

    @description = 'Mocha'
  end

  def cost
    (0.20 + @beverage.cost).round(2)
  end

end