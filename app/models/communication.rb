# frozen_string_literal: true

class Communication < ApplicationRecord
  has_many :email_communications

  validates :topic, presence: true

  enum topic: %i[
    invoice_biller_notification
  ]
end
