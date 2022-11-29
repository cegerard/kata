require './beverage'

class CondimentDecorator < Beverage

  private_class_method :new

  def initialize(beverage)
    super()

    @beverage = beverage
  end

  def description
    "#{@description}, #{@beverage.description}"
  end
  
end