module InvoicesFeedService
  class FetchUserInvoices
    include Interactor

    def call
      context.fail!(message: 'FetchUserInvoices needs a user in the context') if context.user.blank?

      context.invoices = Invoice.includes(:client, :currency)
                                .where(user: context.user)
                                .sort_by_due_date
    end
  end
end
