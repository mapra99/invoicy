require 'rails_helper'

RSpec.describe Api::InvoicesController, type: :controller do
  render_views
  let(:response_body) { JSON.parse(response.body) }

  context 'GET /' do
    describe 'when not authenticated' do
      before :each do
        get :index, format: :json
      end

      it 'should respond with a 401 status' do
        expect(response.status).to eq(401)
      end
    end

    describe 'when authenticated' do
      let!(:user) { create(:user) }
      let!(:invoices) { create_list(:invoice, 20, user: user) }
      let(:successful_context) { double('successful_context', invoices: invoices, success?: true) }

      before :each do
        allow(InvoicesFeedService::BuildInvoicesFeed).to receive(:call).and_return(successful_context)

        sign_in user
        get :index, format: :json
      end

      it 'should respond with a 200 status' do
        expect(response.status).to eq(200)
      end

      example 'payload structure' do
        expect(response_body).to be_an(Array)

        invoice = response_body.sample
        expect(invoice).to have_key('id')
        expect(invoice).to have_key('uuid')
        expect(invoice).to have_key('dueDate')
        expect(invoice).to have_key('client')
        expect(invoice).to have_key('currency')
        expect(invoice).to have_key('totalPrice')
        expect(invoice).to have_key('createdAt')
        expect(invoice).to have_key('updatedAt')
        expect(invoice).to have_key('status')
      end

      describe 'when failed context' do
        let(:failed_context) do
          double('failed_context', success?: false, message: 'There was an error. Please try again', code: nil).as_null_object
        end

        before :each do
          allow(InvoicesFeedService::BuildInvoicesFeed).to receive(:call).and_return(failed_context)

          sign_in user
          get :index, format: :json
        end

        it 'should respond with a 500 status' do
          expect(response.status).to eq 500
        end

        it 'returns the context error message' do
          expect(response_body['error']).to eq(failed_context.message)
        end
      end
    end
  end

  context 'POST /' do
    let(:payload) do
      {
        issue_date: Date.today.strftime('%Y-%m-%d'),
        payment_terms: 30,
        project_description: Faker::Lorem.sentence,
        status: :pending,
        user_location: {
          street_address: Faker::Address.street_name,
          city: Faker::Address.city,
          postcode: Faker::Address.postcode,
          country: Faker::Address.country
        },
        client: {
          name: Faker::Name.name,
          email: Faker::Internet.email,
          location: {
            street_address: Faker::Address.street_name,
            city: Faker::Address.city,
            postcode: Faker::Address.postcode,
            country: Faker::Address.country
          }
        },
        items_list: [{
          name: Faker::Lorem.sentence,
          quantity: (1..10).to_a.sample,
          price: Faker::Commerce.price,
          total_price: Faker::Commerce.price
        }, {
          name: Faker::Lorem.sentence,
          quantity: (1..10).to_a.sample,
          price: Faker::Commerce.price,
          total_price: Faker::Commerce.price
        }]
      }
    end

    describe 'when not authenticated' do
      before :each do
        post :create, format: :json, params: payload
      end

      it 'should respond with a 401 status' do
        expect(response.status).to eq(401)
      end
    end

    describe 'when authenticated' do
      let!(:user) { create(:user) }
      let(:invoice) { create(:invoice) }

      before :each do
        allow(InvoiceCreatorService::CreateInvoice).to receive(:call).and_return(context_response)

        sign_in user
        post :create, format: :json, params: payload
      end

      describe 'when context succeeds' do
        let(:context_response) { double('context_response', invoice: invoice, code: nil, success?: true).as_null_object }

        it 'should respond with a 200 status' do
          expect(response.status).to eq 200
        end

        it 'should have called invoice creator service' do
          expect(InvoiceCreatorService::CreateInvoice).to have_received(:call)
        end
      end

      describe 'when context fails' do
        let(:error_message) { 'Error message' }
        let(:context_response) { double('context_response', message: error_message, code: nil, success?: false).as_null_object }

        it 'should respond with a 500 status' do
          expect(response.status).to eq 500
        end

        it 'should have called invoice creator service' do
          expect(InvoiceCreatorService::CreateInvoice).to have_received(:call)
        end

        it 'returns the error message in response' do
          expect(response_body['error']).to eq(error_message)
        end
      end
    end
  end

  context 'GET /:uuid' do
    let!(:user) { create(:user) }
    let!(:invoices) { create_list(:invoice, 20, user: user) }
    let(:target_invoice) { invoices.sample }
    let(:uuid) { target_invoice.uuid }

    describe 'when not authenticated' do
      before :each do
        get :show, format: :json, params: { uuid: uuid }
      end

      it 'should respond with a 401 status' do
        expect(response.status).to eq(401)
      end
    end

    describe 'when authenticated' do
      before :each do
        allow(InvoiceFinderService::FindUserInvoiceByUuid).to receive(:call).and_return(context_response)

        sign_in user
        get :show, format: :json, params: { uuid: uuid }
      end

      describe 'when successful service' do
        let(:context_response) { double('successful_context', invoice: target_invoice, code: nil, success?: true).as_null_object }

        it 'should respond with a 200 status' do
          expect(response.status).to eq(200)
        end
  
        example 'payload structure' do
          expect(response_body).to be_a(Hash)
  
          expect(response_body).to have_key('id')
          expect(response_body).to have_key('uuid')
          expect(response_body).to have_key('dueDate')
          expect(response_body).to have_key('client')
          expect(response_body).to have_key('currency')
          expect(response_body).to have_key('totalPrice')
          expect(response_body).to have_key('createdAt')
          expect(response_body).to have_key('updatedAt')
          expect(response_body).to have_key('status')
        end
      end

      describe 'when failed service' do
        let(:context_response) { double('failed_context', message: 'Context Error', code: nil, success?: false) }

        it 'responds with a 500 status' do
          expect(response.status).to eq(500)
        end

        it 'contains an error message' do
          expect(response_body['error']).to eq('Context Error')
        end

        describe 'when service didnt find invoice' do
          let(:context_response) { double('failed_context', message: 'Context Error', code: 404, success?: false) }

          it 'responds with a 404 status' do
            expect(response.status).to eq(404)
          end
        end
      end
    end
  end

  context 'DELETE /:uuid' do
    let!(:user) { create(:user) }
    let!(:invoices) { create_list(:invoice, 20, user: user) }
    let(:target_invoice) { invoices.sample }
    let(:uuid) { target_invoice.uuid }

    describe 'when not authenticated' do
      before :each do
        delete :destroy, format: :json, params: { uuid: uuid }
      end

      it 'should respond with a 401 status' do
        expect(response.status).to eq(401)
      end
    end

    describe 'when authenticated' do
      before :each do
        allow(InvoiceRemoverService::RemoveUserInvoice).to receive(:call).and_return(context_response)

        sign_in user
        delete :destroy, format: :json, params: { uuid: uuid }
      end

      describe 'when successful service' do
        let(:context_response) { double('successful_context', code: nil, success?: true).as_null_object }

        it 'should respond with a 204 status' do
          expect(response.status).to eq(204)
        end
      end

      describe 'when failed service' do
        let(:context_response) { double('failed_context', message: 'Context Error', code: nil, success?: false) }

        it 'responds with a 500 status' do
          expect(response.status).to eq(500)
        end

        it 'contains an error message' do
          expect(response_body['error']).to eq('Context Error')
        end

        describe 'when service didnt find invoice' do
          let(:context_response) { double('failed_context', message: 'Context Error', code: 404, success?: false) }

          it 'responds with a 404 status' do
            expect(response.status).to eq(404)
          end
        end
      end
    end
  end
end
