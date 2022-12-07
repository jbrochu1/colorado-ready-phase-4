Rails.application.routes.draw do
  resources :contents
  resources :places
  resources :users, only: [:index, :show, :create]

  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#delete' 
  get '/authorized_user', to: 'users#show'

end