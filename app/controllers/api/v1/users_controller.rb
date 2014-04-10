module Api
	module V1
		class UsersController < ApplicationController


			def create
				@user = User.new params[:user]
				if (@user = @user.save)
					cookies.permanent[:remember_token] = @user.remember_token
				end 	
			end	



		end
	end
end
