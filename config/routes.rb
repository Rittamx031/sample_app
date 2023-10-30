Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  scope "(:locale)", locale: /en|vi/ do
    resources :users
    resources :session
    get 'home' , to:"static_pages#home"
    get 'help' , to:"static_pages#help"
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
