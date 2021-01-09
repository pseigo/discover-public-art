# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of Mix.Config.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
use Mix.Config

# Configure Mix tasks and generators
config :discover_art,
  ecto_repos: [DiscoverArt.Repo]

config :discover_art_web,
  ecto_repos: [DiscoverArt.Repo],
  generators: [context_app: :discover_art]

# Configures the endpoint
config :discover_art_web, DiscoverArtWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "a1mIZut1EYKeC03oju+4tAm6nC9PzlQhwTqCCDNGz3JJOzbdqOY6qdVMv1a1XgtN",
  render_errors: [view: DiscoverArtWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: DiscoverArt.PubSub,
  live_view: [signing_salt: "LMbPtCf3"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
