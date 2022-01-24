module EmailsService
  class SendEmail
    include Interactor

    before do
      context.fail!(message: 'Expected topic in context') if context.topic.blank?
      context.fail!(message: 'Expected sender in context') if context.sender.blank?
      context.fail!(message: 'Expected recipient in context') if context.recipient.blank?
      context.fail!(message: 'Expected subject in context') if context.subject.blank?
      context.fail!(message: 'Expected template_id in context') if context.template_id.blank?
      context.fail!(message: 'Expected template_data in context') if context.template_data.blank?
    end

    def call
      validate_topic
      validate_sender
      resolve_recipient
      resolve_template_data

      build_personalization
      build_mail
      send_email

      create_communication
      create_email_communication
    end

    private

    def validate_topic
      valid_topics = Communication::TOPICS

      context.fail!(message: "Topic must be one of #{valid_topics}", code: 400) if valid_topics.none?(context.topic)
    end

    def validate_sender
      valid_senders = EmailCommunication::SENDERS

      context.fail!(message: "Sender must be one of #{valid_senders}", code: 400) if valid_senders.none?(context.sender)
    end

    def resolve_recipient
      return if Rails.env.production?

      context.recipient = ENV.fetch('EMAILS_RECIPIENT', 'test@example.com')
    end

    def resolve_template_data
      if context.template_data.is_a?(String)
        context.template_data = JSON.parse(context.template_data)
      end

      context.template_data.merge!(
        subject: context.subject
      )
    end

    def build_personalization
      personalization = SendGrid::Personalization.new
      personalization.add_to(SendGrid::Email.new(email: context.recipient))
      personalization.subject = context.subject
      personalization.add_dynamic_template_data(context.template_data)

      context.personalization = personalization
    end

    def build_mail
      personalization = context.personalization
      mail = SendGrid::Mail.new
      mail.from = SendGrid::Email.new(email: context.sender)
      mail.template_id = context.template_id
      mail.add_personalization(personalization)

      context.mail = mail
    end

    def send_email
      mail = context.mail
      response = sendgrid_client.mail._('send').post(request_body: mail.to_json)

      context.response = response
    rescue StandardError => e
      context.fail!(message: "SendGrid request failed with message #{e.message}")
    end

    def sendgrid_client
      context.sendgrid_client ||= SendGrid::API.new(api_key: ENV.fetch('SENDGRID_API_KEY')).client
    end

    def create_communication
      communication = Communication.create!(topic: context.topic)
      context.communication = communication
    end

    def create_email_communication
      context.email_communication = EmailCommunication.create!(
        communication: context.communication,
        sender: context.sender,
        recipient: context.recipient,
        subject: context.subject,
        template_id: context.template_id,
        template_data: context.template_data,
        target_id: context.target_id,
        target_type: context.target_type
      )
    end
  end
end
