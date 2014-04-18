module Api
	module V1
		class TodosController < ApplicationController
			skip_before_filter :verify_authenticity_token
      before_filter :authenticate_user!

			respond_to :json

			def index
				respond_with({completed: current_user.todos.completed, incomplete: current_user.todos.incomplete})
			end 
			
			def show
			  respond_with(current_user.todos.find(params[:id]))
			end 
			
			def create
				@todo = current_user.todos.build params[:todo]
				if @todo.save
					respond_to do |format|
						format.json {render json: @todo}
					end
				end
			end  	

			def update
				@todo = current_user.todos.find params[:id]
				if @todo.update_attributes(params[:todo])
					respond_to do |format|
						format.json {render json: @todo}
					end
				end
			end 

			def destroy
        @todo = current_user.todos.find params[:id]
				respond_with(@todo.destroy) 
			end	


		end
	end
end