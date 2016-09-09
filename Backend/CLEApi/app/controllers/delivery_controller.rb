class DeliveryController < ApplicationController
  def deliver
    @user = User.find(params[:id])
    @user.drinks.delete(*@user.drinks)
    render json: @user
  end
end
