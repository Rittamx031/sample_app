Rails.application.routes.draw do
  scope "(:locale)", locale: /en|vi/ do
    resources :users, except: %i(new create) do
      member do
        get :following, :followers
      end
    end
    resources :relationships, only: %i(create destroy)
    resources :users
    resources :session
    resources :account_activations, only: [:edit]
    resources :password_resets, only: %i(new create edit update)
    resources :microposts,          only: [:create, :destroy]
    get "home", to:"static_pages#home"
    get "account_activation", to: "account_activations#edit", as: "account_activation"
    get "resetpassword", to: "password_resets#edit", as: "reset_password"
    get "help", to:"static_pages#help"
    get "/signup", to: "users#new"
    post "/signup", to: "users#create"
    post "/login", to:"sessions#create"
    get "/login", to:"sessions#new"
    delete "/logout", to:"sessions#destroy"
    root to: "static_pages#home"
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
