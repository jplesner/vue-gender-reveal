#!/bin/sh
# wait-for-postgres.sh

set -e
  
until psql -h "$DB_HOST" -U "$DB_USERNAME" -d "$DB_NAME" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "Postgres is up - executing command"
for cmd in "$@" 
do
    echo $cmd
    $cmd
done