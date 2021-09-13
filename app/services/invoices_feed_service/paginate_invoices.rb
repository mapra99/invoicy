module InvoicesFeedService
  class PaginateInvoices
    include Interactor

    def call
      context.invoices = ::PaginationService::PaginateCollection.call(
        collection: context.invoices,
        limit: context.limit,
        offset: context.offset
      ).paginated_collection
    end
  end
end
