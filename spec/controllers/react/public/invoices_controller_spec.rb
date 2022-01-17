require 'rails_helper'

RSpec.describe React::Public::InvoicesController do
  let(:invoice) { create(:invoice) }

  describe 'GET /:external_id' do
    before do
      get :show, params: { external_id: invoice.external_id }
    end

    it 'responds with a 200 status' do
      expect(response).to have_http_status(200)
    end
  end
end
