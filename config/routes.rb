Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "react/dashboard/invoices#index"

  scope module: :react do
    namespace :dashboard do
      resources :invoices, only: [:index]
    end
  end
end
