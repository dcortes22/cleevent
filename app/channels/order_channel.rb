# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class OrderChannel < ApplicationCable::Channel
  def subscribed
    stream_from "order_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def deliver(data)
    User.save_or_udapte(data['user'])
  end
end
