todoist
=======

Todo app with rails backend and angularjs


##Capistrano
============
1) Create current <env> directory under .environments dir in the project root. This directory will have .env and database.yml files.
2) cap production deploy:check
3) cap production deploy:env_configs
4) cap production deploy
5) cap production angular:copy_site
6) cap production deploy:start/stop

Log on to instance and start nginx.

