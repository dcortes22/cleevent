class User < ApplicationRecord
  before_validation :downcase_email
  has_and_belongs_to_many :drinks
  after_commit :perform_later, on: [:create, :update]

  def self.save_or_udapte(data)
    user = User.find(email: data[:email])
    if user.blank?
      user = User.new(data)
      user.save
    else
      data[:drink_ids].each do |id|
        user.drinks << Drink.find(id)
      end
    end
  end

  private
  def downcase_email
    self.email = email.downcase if email.present?
  end

  def perform_later
    OrderBroadcastJob.perform_later self
  end

end
