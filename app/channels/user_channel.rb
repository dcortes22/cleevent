class UserChannel < ApplicationCable::Channel
  def subscribed
    stream_from "users_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def order(user)
    ActionCable.server.broadcast 'users_channel', message: user
  end
end
