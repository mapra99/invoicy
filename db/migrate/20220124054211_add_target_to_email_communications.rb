class AddTargetToEmailCommunications < ActiveRecord::Migration[6.1]
  def change
    add_reference :email_communications, :target, null: true, polymorphic: true
  end
end
