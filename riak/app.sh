#!/bin/bash

RAND=$(( $RANDOM % 10 + 1 ))

curl -X PUT \
  http://127.0.0.1:8098/buckets/s18040/keys/$RAND \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
    "type": "pear",
    "color": "yellow",
    "smell": "pearry",
    "price": 1.27
  }'

curl -X GET \
  http://127.0.0.1:8098/buckets/s18040/keys/$RAND \
  -H 'cache-control: no-cache'

curl -X PUT \
  http://127.0.0.1:8098/buckets/s18040/keys/$RAND \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
    "type": "pear",
    "color": "yellow",
    "smell": "pearry",
    "price": 1.27
  }'

curl -X GET \
  http://127.0.0.1:8098/buckets/s18040/keys/$RAND \
  -H 'cache-control: no-cache'

curl -X DELETE \
  http://127.0.0.1:8098/buckets/s18040/keys/$RAND \
  -H 'cache-control: no-cache'

curl -X GET \
  http://127.0.0.1:8098/buckets/s18040/keys/$RAND \
  -H 'cache-control: no-cache'

