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
          double('failed_context', success?: false, message: 'There was an error. Please try again')
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
        let(:context_response) { double('context_response', invoice: invoice, success?: true) }

        it 'should respond with a 200 status' do
          expect(response.status).to eq 200
        end

        it 'should have called invoice creator service' do
          expect(InvoiceCreatorService::CreateInvoice).to have_received(:call)
        end
      end

      describe 'when context fails' do
        let(:error_message) { 'Error message' }
        let(:context_response) { double('context_response', message: error_message, success?: false) }

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
end
