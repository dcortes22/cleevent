class OrderBroadcastJob < ApplicationJob
  queue_as :default

  def perform(user)
    ActionCable.server.broadcast "order_channel", user: render_user(user)
  end

  private
  def render_user(user)
    ApplicationController.renderer.render(partial: 'users/order', locals: { user: user })
  end

end
