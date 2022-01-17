# frozen_string_literal: true

module InvoiceFinderService
  class FindInvoiceByExternalId
    include Interactor

    before do
      context.fail!(message: 'Expected external_id in context') if context.external_id.blank?
    end

    def call
      external_id = context.external_id

      invoice = Invoice.find_by(external_id: external_id)
      context.fail!(message: 'Invoice not found', code: 404) if invoice.blank?

      context.invoice = invoice
    end
  end
end
