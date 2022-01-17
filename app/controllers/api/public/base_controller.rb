# frozen_string_literal: true

module Api
  module Public
    class BaseController < ::Api::BaseController
      skip_before_action :authenticate_user!
    end
  end
end
