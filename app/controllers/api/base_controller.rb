module Api
  class BaseController < ApplicationController
    include Api::SecurableApi

    private

    def pagination_params
      params.permit(:limit, :offset)
    end

    def handle_context_error_state(context)
      return if context.success?

      render json: { error: context.message }, status: 500
    end
  end
end
