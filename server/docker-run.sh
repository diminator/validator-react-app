#! /bin/bash
docker run -d --net host -p 8080:8080 \
       -e HASURA_GRAPHQL_DATABASE_URL=postgres://postgres:1234@localhost:5432/explorer_dev \
       -e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
       hasura/graphql-engine:v1.0.0-beta.6
