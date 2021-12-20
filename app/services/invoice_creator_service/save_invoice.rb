# frozen_string_literal: true

module InvoiceCreatorService
  class SaveInvoice
    include Interactor

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
        invoice_items: context.invoice_items,
        name: payload[:project_description],
        issue_date: payload[:issue_date]
      )
    end
  end
end
