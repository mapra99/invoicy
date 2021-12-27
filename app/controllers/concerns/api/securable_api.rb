# frozen_string_literal: true

module Api
  module SecurableApi
    extend ActiveSupport::Concern

    DEBUG_API = ENV.fetch('DEBUG_API', 'false').true?

    included do
      before_action :authenticate_user!, unless: :debug_mode?
      skip_before_action :verify_authenticity_token, if: :debug_mode?
    end

    private

    def debug_mode?
      return false unless DEBUG_API

      request.headers['X-DEBUG-TOKEN'] == ENV.fetch('DEBUG_TOKEN')
    end

    def debug_current_user
      email = request.headers['X-DEBUG-USER']
      User.find_by(email: email)
    end

    def current_user
      return debug_current_user if debug_mode?

      super
    end
  end
end
