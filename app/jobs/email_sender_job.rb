# frozen_string_literal: true

class EmailSenderJob
  include Sidekiq::Job

  def perform(**params)
    EmailsService::SendEmail.call!(**params)
  end
end
