# frozen_string_literal: true

module InvoiceCreatorService
  class SendInvoiceEmail
    include Interactor
    include Rails.application.routes.url_helpers

    NEW_INVOICE_CLIENT_NOTIFICATION = 'd-ec2cbd43a4b24ea9a482380ddb17e8ac'

    before do
      context.fail!(message: 'Expected invoice in context') if context.invoice.blank?
      context.fail!(message: 'Expected client_email in context') if context.client_email.blank?
      context.fail!(message: 'Expected user in context') if context.user.blank?
      context.fail!(message: 'Expected client in context') if context.client.blank?
    end

    def call
      return unless $rollout.active?(:invoice_emails)

      invoice = context.invoice
      return if invoice.draft?

      EmailSenderJob.perform_async(
        template_id: NEW_INVOICE_CLIENT_NOTIFICATION,
        template_data: build_template_data.to_json,
        sender: EmailCommunication::TRANSACTIONS_SENDER_EMAIL,
        recipient: context.client_email,
        subject: "You have received a new invoice from #{context.user.name}",
        topic: Communication::INVOICE_BILLER_NOTIFICATION_TOPIC,
        target_id: context.client_email.id,
        target_type: context.client_email.class.name
      )
    end

    private

    def build_template_data
      {
        client_name: context.client.name,
        user_name: context.user.name,
        invoice_url: invoice_url(external_id: context.invoice.external_id, host: ENV.fetch('BASE_URL')),
        invoice_name: context.invoice.name,
        invoice_total_price: context.invoice.currency.formatted(context.invoice.total_price)
      }
    end
  end
end
