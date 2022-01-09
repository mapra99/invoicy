# frozen_string_literal: true

module InvoiceUpdaterService
  class UpdateUserInvoiceStatus
    include Interactor

    before do
      context.fail!(message: 'Expected user in context') if context.user.blank?
      context.fail!(message: 'Expected uuid in context') if context.uuid.blank?
      context.fail!(message: 'Expected status in context') if context.status.blank?
    end

    def call
      find_invoice
      validate_new_status
      update_status
    end

    private

    def find_invoice
      user = context.user
      uuid = context.uuid

      invoice = user.invoices.find_by(uuid: uuid)
      context.fail!(message: 'Invoice not found', code: 404) if invoice.blank?

      context.invoice = invoice
    end

    def validate_new_status
      valid_statuses = Invoice.statuses.keys
      status = context.status

      context.fail!(message: 'Status not valid', code: 400) if valid_statuses.none?(status)
      true
    end

    def update_status
      invoice = context.invoice
      status = context.status

      invoice.update!(status: status)
    end
  end
end
