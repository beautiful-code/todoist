eval File.read(File.expand_path('../production.rb', __FILE__))

Todoist::Application.config.consider_all_requests_local = true
