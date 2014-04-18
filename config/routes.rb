Todoist::Application.routes.draw do

  devise_for :users

  namespace :api do 
    namespace :v1 do 
      resources :todos
      devise_for :users,:controllers => { :registrations => :'api/v1/user_registrations', :sessions=>'api/v1/user_sessions' }

    end
  end

  root to: 'todos#index'

end
