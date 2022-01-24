# frozen_string_literal: true

module InvoiceCreatorService
  class CreateInvoice
    include Interactor::Organizer

    organize CreateUserLocation,
             CreateUserClient,
             CreateInvoiceItems,
             SaveInvoice,
             SendInvoiceEmail
  end
end
