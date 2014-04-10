module Api
	module V1
		class TodosController < ApplicationController
			skip_before_filter :verify_authenticity_token
			respond_to :json

			def index
				respond_with({completed:Todo.completed, incomplete: Todo.incomplete})
			end 
			
			def show
			  respond_with(Todo.find(params[:id]))
			end 
			
			def create
				@todo = Todo.new params[:todo]
				if @todo.save
					respond_to do |format|
						format.json {render json: @todo}
					end
				end
			end  	

			def update
				@todo = Todo.find params[:id]
				if @todo.update_attributes(params[:todo])
					respond_to do |format|
						format.json {render json: @todo}
					end
				end
			end 

			def destroy
				@todo = Todo.find(params[:id])
				respond_with(@todo.destroy) 
			end	


		end
	end
end