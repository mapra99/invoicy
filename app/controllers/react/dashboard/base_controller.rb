class React::Dashboard::BaseController < React::BaseController
  before_action :authenticate_user!

  private

  def render_dashboard_app
    render "react/dashboard/app"
  end
end
