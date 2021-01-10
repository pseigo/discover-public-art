defmodule DiscoverArtWeb.CheckInController do
  use DiscoverArtWeb, :controller

  alias DiscoverArt.Accounts
  alias DiscoverArt.Accounts.CheckIn

  def create(conn, %{"check_in" => check_in_params}) do
    with {:ok, %CheckIn{} = check_in} <- Accounts.create_check_in(check_in_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.check_in_path(conn, :show, check_in))
      |> render("show.json", check_in: check_in)
    end
  end

  def show(conn, %{"user_id" => user_id}) do
    # check_ins = Accounts.list_check_ins(String.to_integer(user_id))
    check_ins = Accounts.list_check_ins(user_id)
    render(conn, "show.json", check_ins: check_ins)
  end

  def delete(conn, %{"id" => id}) do
    check_in = Accounts.get_check_in!(id)

    with {:ok, %CheckIn{}} <- Accounts.delete_check_in(check_in) do
      send_resp(conn, :no_content, "")
    end
  end
end
