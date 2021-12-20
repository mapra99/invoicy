module InvoiceCreatorService
  class CreateInvoice
    include Interactor::Organizer

    organize CreateUserLocation,
             CreateUserClient,
             CreateInvoiceItems,
             SaveInvoice
  end
end
