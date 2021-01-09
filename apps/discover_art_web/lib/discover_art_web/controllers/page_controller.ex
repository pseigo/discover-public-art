defmodule DiscoverArtWeb.PageController do
  use DiscoverArtWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
