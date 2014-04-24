todoist
=======

Todo app with rails backend and angularjs


##Capistrano
============
1) Create current <env> directory under .environments dir in the project root. This directory will have .env and database.yml files.
2) cap <env> deploy:check
3) cap <env> deploy:env_configs
4) cap <env> deploy
5) cap <env> angular:copy_site
6) cap <env> deploy:start/stop

Log on to instance and start nginx.

