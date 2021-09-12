class React::Auth::BaseController < React::BaseController
  private

  def render_auth_app
    render "react/auth/app"
  end
end
