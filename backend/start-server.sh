#!/bin/bash
echo "Node environment: $NODE_ENV"

status=0
set -e

if [ "$NODE_ENV" = "production" ]; then
  npm run start:prod
  status=$?
fi

if [ "$status" -ne 0 ]; then
  echo "'npm run start:prod' command failed with status $status. Exiting..."
  exit "$status"
fi

if [ "$NODE_ENV" = "development" ]; then
  npm start
  status=$?
fi

if [ "$status" -ne 0 ]; then
  echo "'npm start' command failed with status $status. Exiting..."
  exit "$status"
fi
