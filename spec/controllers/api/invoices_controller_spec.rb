require 'rails_helper'

RSpec.describe Api::InvoicesController, type: :controller do
  render_views

  context 'GET /' do
    describe 'not authenticated' do
      before :each do
        get :index, format: :json
      end

      it 'should respond with a 401 status' do
        expect(response.status).to eq(401)
      end
    end

    describe 'authenticated' do
      let!(:user) { create(:user) }
      let!(:invoices) { create_list(:invoice, 20, user: user) }
      let(:successful_context) { double('successful_context', invoices: invoices, success?: true) }

      before :each do
        allow(InvoicesFeedService::BuildInvoicesFeed).to receive(:call).and_return(successful_context)

        sign_in user
        get :index, format: :json

        @payload = JSON.parse(response.body)
      end

      it 'should respond with a 200 status' do
        expect(response.status).to eq(200)
      end

      example 'payload structure' do
        expect(@payload).to be_an(Array)

        invoice = @payload.sample
        expect(invoice).to have_key('id')
        expect(invoice).to have_key('uuid')
        expect(invoice).to have_key('dueDate')
        expect(invoice).to have_key('client')
        expect(invoice).to have_key('currency')
        expect(invoice).to have_key('createdAt')
        expect(invoice).to have_key('updatedAt')
      end

      describe 'failed context' do
        let(:failed_context) { double('failed_context', success?: false, message: "There was an error. Please try again") }

        before :each do
          allow(InvoicesFeedService::BuildInvoicesFeed).to receive(:call).and_return(failed_context)

          sign_in user
          get :index, format: :json

          @payload = JSON.parse(response.body)
        end

        it 'should respond with a 500 status' do
          expect(response.status).to eq 500
        end

        it 'returns the context error message' do
          expect(@payload["error"]).to eq(failed_context.message)
        end
      end
    end
  end
end
