# frozen_string_literal: true

class Communication < ApplicationRecord
  has_many :email_communications

  validates :topic, presence: true

  INVOICE_BILLER_NOTIFICATION_TOPIC = "invoice_biller_notification"
  TOPICS = [
    INVOICE_BILLER_NOTIFICATION_TOPIC
  ]
end
