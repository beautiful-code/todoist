# config valid only for Capistrano 3.1
lock '3.1.0'

set :application, 'todoist'
set :repo_url, 'git@example.com:me/my_repo.git'
set :repo_url, 'git@github.com:beautiful-code/todoist.git'

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

# Default deploy_to directory is /var/www/my_app
# set :deploy_to, '/var/www/my_app'
set :deploy_to, "/home/deploy/app/#{fetch :application}"

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, %w{config/database.yml}

# Default value for linked_dirs is []
# set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}
set :linked_dirs, %w{log tmp/backup tmp/pids tmp/cache tmp/sockets public/assets public/system}

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

set(:config_files, %w(
  nginx.conf
))

# Unicorn settings
set :unicorn_config, "#{current_path}/config/unicorn.rb"
set :unicorn_pid, "#{current_path}/tmp/pids/unicorn.pid"
set :unicorn_binary, "bundle exec unicorn"


# rvm settings
set :rvm_type, :user
set :rvm_ruby_version, 'ruby-2.1.0@todoist --create'

before "bundler:install", "deploy:install_bundler_gem"


namespace :deploy do

  desc 'Install Bundler Gem version 1.5.3'
  task :install_bundler_gem do
    on roles(:all), in: :parallel do
      within release_path do
        execute :rvm, "#{fetch(:rvm_ruby_version)} do gem install bundler -v 1.5.3"
      end
    end
  end

end
