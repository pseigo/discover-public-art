# Discover Public Art

Discover Public Art helps people explore and find public art pieces.

## Team Members

|Name|Links|
|-|-|
| Peyton Seigo | [LinkedIn](url), [GitHub](url)
| Jesse | [LinkedIn](url), [GitHub](url)
| Jeffrey | [LinkedIn](url), [GitHub](url)
| Aiman Ismail | [LinkedIn](url), [GitHub](url)

## Running the development servers

This will start the development database and back end server. You can reach the server at http://localhost:4000.

### First-time setup

**NOTE**: Node.js 15.5 is [not working with new Phoenix projects at the moment](https://github.com/phoenixframework/phoenix/issues/4126). Roll back to 15.2 if you get errors when running `npm install`.

```bash
# Change to the root directory...
mix deps.get && mix deps.compile
cd apps/discover_art_web/assets && npm install && cd ../../../

docker-compose up -d
mix ecto.create
mix ecto.migrate
```

### Starting and stopping the servers

```bash
# To start
docker-compose up -d
mix phx.server

# To close
# Ctrl+c, 'a' for abort
docker-compose down
```

## nwHacks

To be announced.

## Table of Contents

...

## Important Links

Pitch video
