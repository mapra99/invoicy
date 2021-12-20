# frozen_string_literal: true

module InvoiceCreatorService
  class CreateUserLocation
    include Interactor

    def call
      user_location_params = context.payload[:user_location]
      context.fail!('Expected user_location in payload') if user_location_params.blank?

      location = resolve_location(user_location_params)
      update_user(location)
    end

    private

    def resolve_location(params)
      location = Location.find_or_initialize_by(params)
      location.save!

      location
    end

    def update_user(location)
      context.user_location = context.user.user_locations.find_or_initialize_by(location: location)
      context.user_location.save!
    end
  end
end
