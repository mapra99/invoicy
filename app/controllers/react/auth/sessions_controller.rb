class React::Auth::SessionsController < Devise::SessionsController
  def new
    render "react/auth/app"
  end
end
