module InvoiceCreatorService
  class CreateUserClient
    include Interactor

    def call
      client_params = context.payload[:client]
      context.fail!('Expected client in payload') if client_params.blank?

      resolve_client(client_params)
      resolve_client_email(client_params)
      resolve_client_location(client_params)
      update_user
    end

    private

    def resolve_client(params)
      client = Client.find_or_initialize_by(name: params[:name])
      client.save!

      context.client = client
    end

    def resolve_client_email(params)
      client_email = context.client.emails.find_or_initialize_by(email: params[:email])
      client_email.save!

      context.client_email = client_email
    end

    def resolve_client_location(params)
      location = Location.find_or_initialize_by(params[:location])
      location.save!

      client_location = context.client.client_locations.find_or_initialize_by(location: location)
      client_location.save!

      context.client_location = client_location
    end

    def update_user
      user = context.user
      user.clients << context.client unless user.clients.include?(context.client)
    end
  end
end
