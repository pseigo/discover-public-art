defmodule DiscoverArtWeb.CheckInController do
  use DiscoverArtWeb, :controller

  alias DiscoverArt.Accounts
  alias DiscoverArt.Accounts.CheckIn
  alias DiscoverArt.Locations

  def create(conn, %{"user_id" => _user_id, "public_art_id" => public_art_id} = check_in_params) do
    Locations.maybe_create_public_art(%{id: public_art_id})

    with {:ok, %CheckIn{} = check_in} <- Accounts.maybe_create_check_in(check_in_params) do
      conn
      |> put_status(:created)
      |> render("show.json", check_in: check_in)
    end
  end

  def show(conn, %{"check_in_id" => check_in_id}) do
    check_in = Accounts.get_check_in!(check_in_id)
    render(conn, "show.json", check_in: check_in)
  end

  def show(conn, %{"user_id" => user_id}) do
    # check_ins = Accounts.list_check_ins(String.to_integer(user_id))
    check_ins = Accounts.list_check_ins(user_id)
    render(conn, "index.json", check_ins: check_ins)
  end

  def delete(conn, %{"user_id" => user_id, "public_art_id" => public_art_id} = check_in_params) do
    check_in = Accounts.get_check_in!(user_id, public_art_id)

    with {:ok, %CheckIn{}} <- Accounts.delete_check_in(check_in) do
      send_resp(conn, :no_content, "")
    end
  end
end
