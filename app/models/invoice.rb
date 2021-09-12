class Invoice < ApplicationRecord
  belongs_to :user
  belongs_to :client, required: false # to allow draft invoices not to have a client set
  has_many :invoice_items, dependent: :destroy
  has_many :items, through: :invoice_items

  enum status: { draft: 0, pending: 1, paid: 2 }

  validates :status, presence: true, inclusion: { in: statuses.keys }
  validates :uuid, uniqueness: { scope: %i[user_id client_id] }, unless: :draft?
  validates_presence_of :name, :issue_date, :due_date, :total_price, :status, :uuid, unless: :draft?

  before_validation :set_uuid

  def draft?
    status == 'draft'
  end

  private

  def set_uuid
    return if uuid.present?
    return if client.blank?

    counter = user.invoices.where(client: client).size + 1

    loop do
      self.uuid = "#{client.slug}_#{counter}"
      break if valid?

      counter += 1
    end
  end
end
