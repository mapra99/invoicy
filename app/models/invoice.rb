class Invoice < ApplicationRecord
  include Paginable
  include Currencies

  belongs_to :user
  belongs_to :client, required: false # to allow draft invoices not to have a client set
  belongs_to :currency, required: false # to allow draft invoices not to have a client set
  belongs_to :user_location, required: false # to allow draft invoices not to have a client set
  belongs_to :client_location, required: false # to allow draft invoices not to have a client set
  belongs_to :client_email, required: false # to allow draft invoices not to have a client set
  has_many :invoice_items, dependent: :destroy
  has_many :items, through: :invoice_items

  enum status: { draft: 0, pending: 1, paid: 2 }

  validates :status, presence: true, inclusion: { in: statuses.keys }
  validates :uuid, uniqueness: { scope: %i[user_id] }, unless: :draft?
  validates_presence_of :name, :issue_date, :due_date, :total_price, :status, :uuid, unless: :draft?
  validates :external_id, uniqueness: true, presence: true

  before_validation :set_uuid
  before_validation :set_external_id, on: :create

  scope :sort_by_issue_date, -> { order(issue_date: :desc) }
  scope :sort_by_due_date, -> { order(due_date: :desc) }

  def draft?
    status == 'draft'
  end

  private

  def set_uuid
    return if uuid.present?
    return if client.blank?

    counter = Invoice.where(client: client, user: user).count + 1

    uuid = ''
    loop do
      uuid = "#{client.slug}_#{counter}"
      break unless Invoice.exists?(uuid: uuid, user: user)

      counter += 1
    end

    self.uuid = uuid
  end

  def set_external_id
    token = ''
    loop do
      token = SecureRandom.hex
      break unless Invoice.exists?(external_id: token)
    end

    self.external_id = token
  end
end
