#!/bin/bash

# Modify the MySQL settings below so they will match your own.
MYSQL_USERNAME="root"
MYSQL_PASSWORD="root"
MYSQL_HOST="localhost"
MYSQL_DB_NAME="drupal_angular"

# Modify the URL below to match your OpenScholar base domain URL.
BASE_DOMAIN_URL="http://localhost/drupal_angular_forms/www"

# Modify the login details below to be the desired login details for the Administrator account.
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="admin"
ADMIN_EMAIL="admin@example.com"

sudo chmod 777 www/sites/default
rm -rf www/
mkdir www

bash scripts/build

# Fix permissions
sudo chmod 777 -R www/

# Build last version of angular application.
cd components/restful-app

sudo npm install
grunt build

cd ../..

Install angular components via bower.
bower uninstall restful-app
bower cache clean
bower install ./components/restful-app

cd www

drush si -y drupal_angular --locale=en --account-name=$ADMIN_USERNAME --account-pass=$ADMIN_PASSWORD --account-mail=$ADMIN_EMAIL --db-url=mysql://$MYSQL_USERNAME:$MYSQL_PASSWORD@$MYSQL_HOST/$MYSQL_DB_NAME --uri=$BASE_DOMAIN_URL

# Development modules.
drush en devel views_ui field_ui migrate_ui -y

# Migrate content.
drush en drupal_angular_migrate -y
drush mi --all --user=1

# Login as admin.
drush uli --uri=$BASE_DOMAIN_URL
