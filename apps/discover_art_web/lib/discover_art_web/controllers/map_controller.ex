defmodule DiscoverArtWeb.MapController do
  use DiscoverArtWeb, :controller

  plug :put_layout, "map.html"

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
