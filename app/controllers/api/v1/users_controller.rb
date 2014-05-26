class Api::V1::UsersController < ApplicationController

  before_filter :check_for_full_user, only: [:create]

  def create
    params[:user].merge!({'anonymous'=> false})
    if current_user.update_attributes(params[:user])
      render :json=> current_user.as_json(:private=>true), :status=>201
      return
    else
      render :json=> user.errors, :status=>422
    end
  end

  private

  def check_for_full_user
    if (!current_user.anonymous)
      render :json=> current_user.as_json(:private=>true), :status=>201
      return
    end
  end



end
