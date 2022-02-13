# frozen_string_literal: true

class EmailCommunication < ApplicationRecord
  belongs_to :communication
  belongs_to :target, polymorphic: true, optional: true

  validates_presence_of :sender, :recipient, :subject, :template_id, :template_data

  TRANSACTIONS_SENDER_EMAIL = 'transactions@invoicious.com'
  SENDERS = [
    TRANSACTIONS_SENDER_EMAIL
  ]
end
