# frozen_string_literal: true

module InvoiceFinderService
  class FindUserInvoiceByUuid
    include Interactor

    before do
      context.fail!(message: 'Expected user in context') if context.user.blank?
      context.fail!(message: 'Expected uuid in context') if context.uuid.blank?
    end

    def call
      user = context.user
      uuid = context.uuid

      invoice = user.invoices.find_by(uuid: uuid)
      context.fail!(message: 'Invoice not found', code: 404) if invoice.blank?

      context.invoice = invoice
    end
  end
end
