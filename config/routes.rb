Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :stores, only: [:index, :show] #, :show, :create


  post "/login", to: "sessions#create" #check user
  get "/me", to: "users#show" #stay log in
  delete "/logout", to: "sessions#destroy" #sig out
  post "/signup", to: "users#create" #create a new user


end
