require 'rails_helper'

describe EmailsService::SendEmail do
  subject { EmailsService::SendEmail }

  let(:template_id) { SecureRandom.hex }
  let(:template_data) { { variable: '123' }.to_json }
  let(:sender) { EmailCommunication::SENDERS.sample }
  let(:recipient) { Faker::Internet.email }
  let(:subject_param) { Faker::Lorem.sentence }
  let(:topic) { Communication::TOPICS.sample }

  let(:context) do
    subject.call(
      template_id: template_id,
      template_data: template_data,
      sender: sender,
      recipient: recipient,
      subject: subject_param,
      topic: topic
    )
  end

  let(:sendgrid_personalization) do
    instance_double(SendGrid::Personalization, {
                      add_to: true,
                      "subject=": true,
                      add_dynamic_template_data: true
                    })
  end

  let(:sendgrid_email) { instance_double(SendGrid::Email, {}) }
  let(:sendgrid_mail) do
    instance_double(SendGrid::Mail, {
                      "from=": true,
                      "template_id=": true,
                      add_personalization: true
                    })
  end

  before do
    allow(SendGrid::Personalization).to receive(:new).and_return(sendgrid_personalization)
    allow(SendGrid::Email).to receive(:new).and_return(sendgrid_email)
    allow(SendGrid::Mail).to receive(:new).and_return(sendgrid_mail)
    allow(SendGrid::API).to receive_message_chain('new.client.mail._.post').and_return(true)
  end

  describe 'when valid params' do
    it 'is successful' do
      expect(context.success?).to be true
    end

    it 'creates a communication record' do
      expect(context.communication).to eq(Communication.last)
    end

    it 'creates an email communication record' do
      expect(context.email_communication).to eq(EmailCommunication.last)
    end
  end

  describe 'when missing params' do
    describe 'when template_id not present' do
      let(:template_id) { nil }
      it { expect(context.success?).to be false }
    end

    describe 'when template_data not present' do
      let(:template_data) { nil }
      it { expect(context.success?).to be false }
    end

    describe 'when sender not present' do
      let(:sender) { nil }
      it { expect(context.success?).to be false }
    end

    describe 'when recipient not present' do
      let(:recipient) { nil }
      it { expect(context.success?).to be false }
    end

    describe 'when subject not present' do
      let(:subject_param) { nil }
      it { expect(context.success?).to be false }
    end

    describe 'when topic not present' do
      let(:topic) { nil }
      it { expect(context.success?).to be false }
    end
  end

  describe 'when topic is not a valid one' do
    let(:topic) { 'asdads' }
    it { expect(context.success?).to be false }
    it { expect(context.code).to eq 400 }
  end

  describe 'when sender is not a valid one' do
    let(:sender) { 'test@example.com' }
    it { expect(context.success?).to be false }
    it { expect(context.code).to eq 400 }
  end

  describe 'when template_data is passed as a hash' do
    let(:template_data) {{a: "b"}}
    it { expect(context.success?).to be true }
    it { expect(context.template_data).to be_a Hash}
  end
end
