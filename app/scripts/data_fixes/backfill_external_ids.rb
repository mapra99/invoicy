module DataFixes
  class BackfillExternalIds
    class << self
      def call
        Invoice.where(external_id: nil).each do |invoice|
          invoice.send(:set_external_id)
          invoice.save!
        end
      end
    end
  end
end
