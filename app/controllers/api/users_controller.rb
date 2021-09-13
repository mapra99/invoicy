class Api::UsersController < Api::BaseController
  skip_before_action :authenticate_user!, only: [:current]

  def current
    head :no_content and return unless current_user
  end
end
