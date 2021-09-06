class Api::UsersController < Api::BaseController
  def current
    render json: {}, status: :no_content and return unless current_user
  end
end
