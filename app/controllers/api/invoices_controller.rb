module Api
  class InvoicesController < BaseController
    def index
      result = InvoicesFeedService::BuildInvoicesFeed.call(user: current_user, **pagination_params)
      @invoices = result.invoices if result.success?

      handle_context_error_state(result)
    end

    def create
      byebug
      render json: {status: "OK"}
    end
  end
end
