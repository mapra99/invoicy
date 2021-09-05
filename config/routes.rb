Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "react/dashboard/invoices#index"

  devise_for :users

  scope module: :react do
    namespace :dashboard do
      resources :invoices, only: [:index]
    end

    scope module: :auth do
      get "login"
      get "signup"
    end
  end
end
