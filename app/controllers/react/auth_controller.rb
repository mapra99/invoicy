class React::AuthController < React::BaseController
  def login
    render_auth_app
  end

  def signup
    render_auth_app
  end

  private

  def render_auth_app
    render "react/auth/app"
  end
end
