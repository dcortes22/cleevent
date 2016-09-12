class User < ApplicationRecord
  before_validation :downcase_email
  has_and_belongs_to_many :drinks

  private
  def downcase_email
    self.email = email.downcase if email.present?
  end
end
