App.order = App.cable.subscriptions.create "OrderChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    console.log data
    $('#drinks').append data['user']

  deliver: (user) ->
    @perform 'deliver', user: user

$(document).on 'click', '[data-behavior~=order_done]', (event) ->
  event.preventDefault()
  id = $(this).attr('data-id')
  $(this).closest("tr").remove()
  App.order.deliver id
