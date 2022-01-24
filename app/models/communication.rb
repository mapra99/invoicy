# frozen_string_literal: true

class Communication < ApplicationRecord
  has_many :email_communications

  validates :topic, presence: true

  TOPICS = %w[
    invoice_biller_notification
  ].freeze
end
