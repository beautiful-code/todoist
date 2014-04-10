class User < ActiveRecord::Base
  attr_accessible :name, :password, :remember_token
  has_many :todos
  before_save :create_remember_token




private

def create_remember_token
   self.remember_token = SecureRandom.urlsafe_base64 # If u just say remember_token= ...   then local variable
end	


end
