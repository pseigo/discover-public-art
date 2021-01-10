defmodule DiscoverArtWeb.UserView do
  use DiscoverArtWeb, :view
  alias DiscoverArtWeb.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      email: user.email,
      display_name: user.display_name,
      join_date: user.join_date}
  end
end
