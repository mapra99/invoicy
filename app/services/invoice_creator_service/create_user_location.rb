# frozen_string_literal: true

module InvoiceCreatorService
  class CreateUserLocation
    include Interactor

    before do
      context.fail!(message: 'Expected payload in context') if context.payload.blank?
      context.fail!(message: 'Expected user_location in payload') if context.payload[:user_location].blank?
      context.fail!(message: 'Expected user in context') if context.user.blank?
    end

    def call
      user_location_params = context.payload[:user_location]
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
