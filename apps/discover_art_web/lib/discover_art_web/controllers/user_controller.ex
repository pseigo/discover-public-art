defmodule DiscoverArtWeb.UserController do
  use DiscoverArtWeb, :controller

  alias DiscoverArt.Accounts
  alias DiscoverArt.Accounts.User

  def index(conn, _params) do
    users = Accounts.list_users()
    render(conn, "index.json", users: users)
  end

  def create(conn, params) do
    case Accounts.create_user(params) do
      {:ok, %User{} = user} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", Routes.user_path(conn, :show, user))
        |> render("show.json", user: user)
      {:error, changeset} ->
        errors =
          changeset.errors
          |> Enum.map(&(%{
              field: Atom.to_string(elem(&1, 0)),
              error: elem(elem(&1, 1), 0)
             }))

        json(conn, errors)
    end
  end

  def show(conn, %{"id" => id}) do
    try do
      user = Accounts.get_user!(id)
      render(conn, "show.json", user: user)
    rescue
      Ecto.NoResultsError ->
        conn
        |> Plug.Conn.put_status(404)
        |> json("user with id #{id} does not exist")
    end
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{} = user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{}} <- Accounts.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end

end
