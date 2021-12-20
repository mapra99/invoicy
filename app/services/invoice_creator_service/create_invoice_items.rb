module InvoiceCreatorService
  class CreateInvoiceItems
    include Interactor

    def call
      items_list = context.payload[:items_list]
      context.fail!('Expected items_list in payload') if items_list.blank?

      context.invoice_items = items_list.map do |item_params|
        item = find_or_create_item(item_params)
        build_invoice_item(item, item_params)
      end
    end

    private

    def find_or_create_item(params)
      item = context.user.items.find_by(name: params[:name])
      return item if item.present?

      context.user.items.create!(
        name: params[:name],
        standard_unit_price: params[:price]
      )
    end

    def build_invoice_item(item, params)
      InvoiceItem.new(
        item: item,
        quantity: params[:quantity],
        fixed_unit_price: params[:price],
        total_price: params[:total_price]
      )
    end
  end
end
