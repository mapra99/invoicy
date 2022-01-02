# These routes must be consistent with the ones defined in the client apps if needed (app/packs/javascript/constants/routes.ts)

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'react/dashboard/invoices#index'

  devise_for :users,
             path: 'users',
             path_names: { sign_in: 'login', sign_up: 'signup' },
             controllers: { sessions: 'react/auth/sessions', registrations: 'react/auth/registrations' }

  scope module: :react do
    namespace :dashboard do
      resources :invoices, only: %i[index new show], param: :uuid
    end
  end

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [] do
      collection do
        get 'current'
      end
    end

    resources :invoices, only: %i[index create show destroy], param: :uuid
  end
end
