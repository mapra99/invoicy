module InvoicesFeedService
  class PaginateInvoices
    include Interactor

    def call
      invoices = context.invoices
      limit = context.limit
      offset = context.offset || 0
      return if limit.blank? || offset.blank?

      context.invoices = invoices.paginate(limit, offset)
    end
  end
end
