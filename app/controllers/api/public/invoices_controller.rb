# frozen_string_literal: true

module Api
  module Public
    class InvoicesController < BaseController
      def show
        result = InvoiceFinderService::FindInvoiceByExternalId.call(external_id: params[:external_id])
        @invoice = result.invoice if result.success?

        handle_context_error_state(result)
      end
    end
  end
end
