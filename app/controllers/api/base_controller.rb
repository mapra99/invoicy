# frozen_string_literal: true

module Api
  class BaseController < ApplicationController
    include Api::SecurableApi

    DEFAULT_ERROR_STATUS = 500

    private

    def pagination_params
      params.permit(:limit, :offset)
    end

    def handle_context_error_state(context)
      return if context.success?

      error = context.message
      status = context.code || DEFAULT_ERROR_STATUS
      render json: { error: error }, status: status
    end
  end
end
