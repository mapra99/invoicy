module InvoicesFeedService
  class BuildInvoicesFeed
    include Interactor::Organizer

    organize FetchUserInvoices,
             FilterInvoicesByStatus,
             PaginateInvoices
  end
end
