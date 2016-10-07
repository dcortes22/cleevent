class RaffleController < ApplicationController
  def index
    @users = User.all
  end
end
