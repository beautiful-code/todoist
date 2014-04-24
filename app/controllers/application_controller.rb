class ApplicationController < ActionController::Base
  protect_from_forgery
  skip_before_filter :verify_authenticity_token




  def check_for_first_time
    unless(current_user and params[:authentication_token])
      email = "todo_#{rand(0..20000)+rand(0..200000)}@todoist.com"
      u = User.new(anonymous:true,email: email)
      u.save!(validate: false)
      sign_in(:user, u)
    end
  end

end
