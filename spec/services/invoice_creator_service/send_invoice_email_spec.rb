require 'rails_helper'

describe InvoiceCreatorService::SendInvoiceEmail do
  subject { InvoiceCreatorService::SendInvoiceEmail }

  let(:invoice_param) { create(:invoice) }
  let(:client_param) { create(:client) }
  let(:user_param) { create(:user) }
  let(:client_email_param) { create(:client_email, client: client_param) }

  let(:context) do
    subject.call(
      invoice: invoice_param,
      user: user_param,
      client: client_param,
      client_email: client_email_param
    )
  end

  before do
    allow(EmailSenderJob).to receive(:perform_async).and_return(true)
    allow($rollout).to receive(:active?).with(:invoice_emails).and_return(true)
  end

  describe 'when all params are valid' do
    it { expect(context.success?).to be true }

    it 'calls the email sender job' do
      context
      expect(EmailSenderJob).to have_received(:perform_async).exactly(1).times
    end

    describe 'when feature flag is not set' do
      before do
        allow($rollout).to receive(:active?).with(:invoice_emails).and_return(false)
      end

      it "doesn't send an email" do
        context
        expect(EmailSenderJob).not_to have_received(:perform_async)
      end
    end

    describe 'when invoice is draft' do
      let(:invoice_param) { create(:invoice, status: :draft) }

      it "doesn't send an email" do
        context
        expect(EmailSenderJob).not_to have_received(:perform_async)
      end
    end
  end

  describe 'when missing params' do
    describe 'when invoice not present' do
      let(:invoice_param) { nil }

      it { expect(context.success?).to be false }
      it { expect(context.message).to eq('Expected invoice in context') }
    end

    describe 'when client not present' do
      let(:client_param) { nil }
      let(:client_email_param) { create(:client_email) }

      it { expect(context.success?).to be false }
      it { expect(context.message).to eq('Expected client in context') }
    end

    describe 'when user not present' do
      let(:user_param) { nil }

      it { expect(context.success?).to be false }
      it { expect(context.message).to eq('Expected user in context') }
    end

    describe 'when user not present' do
      let(:client_email_param) { nil }

      it { expect(context.success?).to be false }
      it { expect(context.message).to eq('Expected client_email in context') }
    end
  end
end
