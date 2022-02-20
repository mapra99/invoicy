# frozen_string_literal: true

module Api
  class InvoicesController < BaseController
    before_action :invoice_params, only: [:create]

    def index
      result = InvoicesFeedService::BuildInvoicesFeed.call(
        user: current_user,
        filters: filter_params,
        **pagination_params
      )
      @invoices = result.invoices if result.success?

      handle_context_error_state(result)
    end

    def create
      result = InvoiceCreatorService::CreateInvoice.call(user: current_user, payload: invoice_params)
      @invoice = result.invoice if result.success?

      handle_context_error_state(result)
    end

    def show
      result = InvoiceFinderService::FindUserInvoiceByUuid.call(user: current_user, uuid: params[:uuid])
      @invoice = result.invoice if result.success?

      handle_context_error_state(result)
    end

    def destroy
      result = InvoiceRemoverService::RemoveUserInvoice.call(user: current_user, uuid: params[:uuid])
      head :no_content and return if result.success?

      handle_context_error_state(result)
    end

    def update
      result = InvoiceUpdaterService::UpdateInvoice.call(user: current_user, payload: invoice_params)
      @invoice = result.invoice if result.success?

      handle_context_error_state(result)
    end

    def update_status
      result = InvoiceUpdaterService::UpdateUserInvoiceStatus.call(
        user: current_user,
        uuid: params[:uuid],
        status: params[:status]
      )

      @invoice = result.invoice if result.success?

      handle_context_error_state(result)
    end

    private

    def invoice_params
      params.permit(
        :uuid,
        :issue_date,
        :payment_terms,
        :project_description,
        :status,
        user_location: %i[street_address city postcode country],
        client: [:name, :email, { location: %i[street_address city postcode country] }],
        items_list: %i[name quantity price total_price]
      )
    end

    def filter_params
      {
        status: params[:status]&.split(',')
      }
    end
  end
end
