module InvoicesFeedService
  class FetchUserInvoices
    include Interactor

    def call
      context.fail!(message: 'FetchUserInvoices needs a user in the context') if context.user.blank?

      context.invoices = context.user
                                .invoices
                                .includes(:client, :currency)
                                .sort_by_due_date
    end
  end
end
