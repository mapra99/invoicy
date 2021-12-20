# frozen_string_literal: true

class String
  def true?
    downcase == 'true'
  end
end
