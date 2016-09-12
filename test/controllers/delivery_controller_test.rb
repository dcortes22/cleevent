require 'test_helper'

class DeliveryControllerTest < ActionDispatch::IntegrationTest
  test "should get deliver" do
    get delivery_deliver_url
    assert_response :success
  end

end
