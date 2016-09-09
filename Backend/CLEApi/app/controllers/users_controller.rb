class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.where(email: user_params[:email]).first
    if @user.blank?
      @user = User.new(user_params)
      if @user.save
        ActionCable.server.broadcast 'users_channel', message: @user
        render json: @user, status: :created, location: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    else
      user_params[:drink_ids].each do |id|
        @user.drinks << Drink.find(id)
      end
      ActionCable.server.broadcast 'users_channel', message: @user
      render json: @user
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :last_name, :email, drink_ids:[])
    end
end
