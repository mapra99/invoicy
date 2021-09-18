module InvoicesFeedService
  class BuildInvoicesFeed
    include Interactor::Organizer

    organize FetchUserInvoices,
             PaginateInvoices
  end
end
