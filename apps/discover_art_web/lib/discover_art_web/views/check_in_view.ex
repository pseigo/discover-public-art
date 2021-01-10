defmodule DiscoverArtWeb.CheckInView do
  use DiscoverArtWeb, :view
  alias DiscoverArtWeb.CheckInView

  def render("index.json", %{check_ins: check_ins}) do
    %{data: render_many(check_ins, CheckInView, "check_in.json")}
  end

  def render("show.json", %{check_in: check_in}) do
    %{data: render_one(check_in, CheckInView, "check_in.json")}
  end

  def render("check_in.json", %{check_in: check_in}) do
    check_in.public_art_id
  end
end
