Rails.application.routes.draw do

  put 'deliver/:id(.:format)', :to => 'delivery#deliver', :as => :deliver_drinks

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  resources :drinks
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
