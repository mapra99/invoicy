class React::Auth::RegistrationsController < Devise::RegistrationsController
  def new
    render "react/auth/app"
  end
end
