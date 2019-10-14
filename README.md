# Validator React App

Frontend framework that subscribes to `geth`, `blockscout` + `hasura` (graphql) and `ethstats-server`.

## Getting started

```bash
yarn
# check if postgres is running and change DB_URL in server/docker-run.sh
cd server; ./docker-run.sh; cd -
# e.g. ws://localhost:8080/v1/graphql (Hasura)
export REACT_APP_WS_GRAPHQL="<Hasura GraphQL WebSocket>"
# e.g. ws://localhost:3000/primus/ (Ethstats)
export REACT_APP_WS_ETHSTATS="<Ethstats WebSocket>"
yarn start
```
