Rails.application.routes.draw do
  get 'raffle/index'

  resources :categories
  resources :drinks
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'
  root to: 'users#show'
end
