Rails.application.routes.draw do
  scope "(:locale)", locale: /en|vi/ do
    resources :users
    get 'static_pages/home'
    get 'static_pages/help'
    get "/signup", to: "users#new"
    post "/signup", to: "users#create"
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
