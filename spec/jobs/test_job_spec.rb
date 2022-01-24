require 'rails_helper'
require 'sidekiq/testing'

RSpec.describe TestJob, type: :job do
  before do
    Sidekiq::Testing.inline! do
      described_class.perform_async
    end
  end

  it 'creates a test user' do
    expect(User.find_by(email: 'sidekiq@example.com')).not_to be_nil
  end
end
