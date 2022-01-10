module InvoicesFeedService
  class FilterInvoicesByStatus
    include Interactor

    before do
      context.filters ||= {}
      context.filters[:status] ||= Invoice.statuses.keys
    end

    def call
      statuses = context.filters[:status]

      context.invoices = context.invoices.where(status: statuses)
    end
  end
end
