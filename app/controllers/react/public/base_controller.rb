# frozen_string_literal: true

module React
  module Public
    class BaseController < ::React::BaseController
      def render_public_app
        render 'react/public/app'
      end
    end
  end
end
