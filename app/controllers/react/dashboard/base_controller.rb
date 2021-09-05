class React::Dashboard::BaseController < React::BaseController
  private

  def render_dashboard_app
    render "react/dashboard/app"
  end
end
