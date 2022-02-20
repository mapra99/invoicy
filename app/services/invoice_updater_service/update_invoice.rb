# frozen_string_literal: true

module InvoiceUpdaterService
  class UpdateInvoice
    include Interactor::Organizer

    before do
      context.fail!(message: 'Expected user in context') if context.user.blank?
      context.fail!(message: 'Expected payload in context') if context.payload.blank?

      context.uuid = context.payload[:uuid]
    end

    organize InvoiceFinderService::FindUserInvoiceByUuid,
             InvoiceCreatorService::CreateUserLocation,
             InvoiceCreatorService::CreateUserClient,
             InvoiceCreatorService::CreateInvoiceItems,
             SaveInvoice
  end
end
