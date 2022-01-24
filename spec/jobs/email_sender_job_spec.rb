require 'rails_helper'
require 'sidekiq/testing'

RSpec.describe EmailSenderJob, type: :job do
  before do
    allow(EmailsService::SendEmail).to receive(:call!)

    Sidekiq::Testing.inline! do
      described_class.perform_async
    end
  end

  it 'calls EmailsService::SendEmail' do
    expect(EmailsService::SendEmail).to have_received(:call!)
  end
end
