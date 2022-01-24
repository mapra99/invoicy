# frozen_string_literal: true

class EmailCommunication < ApplicationRecord
  belongs_to :communication

  validates_presence_of :sender, :recipient, :subject, :template_id, :template_data

  enum sender: %i[
    transactions@invoicious.com
  ]
end
