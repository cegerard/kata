class Beverage

  private_class_method :new

  def initialize
    @description = 'Unknown beverage'
  end

  def description
    @description
  end

  def cost
    raise 'Not Implemented'
  end

end