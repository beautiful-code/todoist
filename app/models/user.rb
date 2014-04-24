class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :token_authenticatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me,:anonymous

  has_many :todos


  # For token_authenticable to work
  before_save :ensure_authentication_token


  def serializable_hash(options={})
    options ||= {}
    methods = []
    methods << :authentication_token if options[:private]
    options[:methods] ||=methods
    super
  end


end
