# frozen_string_literal: true

module InvoiceCreatorService
  class SaveInvoice
    include Interactor

    before do
      context.fail!(message: 'Expected user in context') if context.user.blank?
      context.fail!(message: 'Expected client in context') if context.client.blank?
      context.fail!(message: 'Expected invoice_items in context') if context.invoice_items.blank?
      context.fail!(message: 'Expected user_location in context') if context.user_location.blank?
      context.fail!(message: 'Expected client_location in context') if context.client_location.blank?
      context.fail!(message: 'Expected client_email in context') if context.client_email.blank?


      context.fail!(message: 'Expected payload in context') if context.payload.blank?
      context.fail!(message: 'Expected payment_terms in payload') if context.payload[:payment_terms].blank?
      context.fail!(message: 'Expected issue_date in payload') if context.payload[:issue_date].blank?
      context.fail!(message: 'Expected status in payload') if context.payload[:status].blank?
      context.fail!(message: 'Expected project_description in payload') if context.payload[:project_description].blank?
    end

    def call
      resolve_due_date
      resolve_total_price

      invoice = build_invoice

      invoice.save!
      context.invoice = invoice
    end

    private

    def resolve_due_date
      payment_terms = context.payload[:payment_terms]
      issue_date = context.payload[:issue_date].to_datetime

      context.due_date = issue_date + payment_terms.days
    end

    def resolve_total_price
      context.total_price = context.invoice_items.pluck(:total_price).reduce(:+)
    end

    def build_invoice
      payload = context.payload

      Invoice.new(
        user: context.user,
        client: context.client,
        user_location: context.user_location,
        client_location: context.client_location,
        client_email: context.client_email,
        total_price: context.total_price,
        currency: context.currency,
        due_date: context.due_date,
        status: payload[:status],
        invoice_items: context.invoice_items,
        name: payload[:project_description],
        issue_date: payload[:issue_date]
      )
    end
  end
end
