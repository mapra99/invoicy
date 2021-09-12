module DataFixes
  class PopulateCurrencies
    class << self
      def call
        response = RestClient.get('https://api.coinbase.com/v2/currencies')
        payload = JSON.parse(response.body)

        payload["data"].each do |currency|
          record = Currency.find_or_create_by(abbreviation: currency["id"])
          record.update(name: currency["name"], min_size: currency["min_size"])
        end
      end
    end
  end
end
