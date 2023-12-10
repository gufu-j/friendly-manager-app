Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :stores, only: [:index, :show] #, :show, :create
  resources :orders, only: [:index, :show, :create, :destroy, :update]
  resources :products, only: [:index, :show, :create, :destroy, :update]


  post "/login", to: "sessions#create" #check user
  get "/me", to: "users#show" #stay log in
  delete "/logout", to: "sessions#destroy" #sig out
  post "/signup", to: "users#create" #create a new user
  delete "/delete_admin_orders/:id", to: "orders#adminDeleteOrder" ##adminorders
  patch "/update_admin_orders/:id", to: "orders#adminUpdateOrder" ##adminorders


  post "/log_in_create_store", to: "stores#create_single_store"
  get "/quantities/:num", to: "products#total_quantities"
  get "/today_oders", to: "orders#today_ors"

  delete "/delete_all_orders", to: "orders#delete_all"

  # get "/products", to: "products#index"




end
