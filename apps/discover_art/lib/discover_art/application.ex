defmodule DiscoverArt.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      DiscoverArt.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: DiscoverArt.PubSub}
      # Start a worker by calling: DiscoverArt.Worker.start_link(arg)
      # {DiscoverArt.Worker, arg}
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: DiscoverArt.Supervisor)
  end
end
