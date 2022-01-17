require 'rails_helper'

RSpec.describe Api::Public::InvoicesController do
  render_views
  describe 'GET /:external_id' do
    let(:invoice) { create(:invoice) }

    before do
      allow(InvoiceFinderService::FindInvoiceByExternalId).to receive(:call).and_return(context_response)

      get :show, params: { external_id: invoice.external_id}, format: :json
    end

    describe 'when successful service' do
      let(:context_response) { double('successful_context', code: nil, invoice: invoice, success?: true).as_null_object }

      it 'should respond with a 200 status' do
        expect(response.status).to eq(200)
      end
    end

    describe 'when failed service' do
      let(:context_response) { double('failed_context', code: 404, message: 'Not Found', success?: false).as_null_object }

      it 'should respond with a 404 status' do
        expect(response.status).to eq(404)
      end
    end
  end
end
