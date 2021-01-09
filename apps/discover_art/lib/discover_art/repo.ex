defmodule DiscoverArt.Repo do
  use Ecto.Repo,
    otp_app: :discover_art,
    adapter: Ecto.Adapters.Postgres
end
