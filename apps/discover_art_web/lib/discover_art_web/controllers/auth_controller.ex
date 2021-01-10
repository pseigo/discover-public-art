defmodule DiscoverArtWeb.AuthController do
  use DiscoverArtWeb, :controller

  alias DiscoverArtWeb.UserAuth
  alias DiscoverArt.Accounts

  def new(conn, _params) do
    render(conn, "new.html")
  end

  def create(conn, %{"email" => email, "password" => password} = user_params) do
    json(conn, Accounts.get_user_by_email(email))

    # if user = Accounts.get_user_by_email_and_password(email, password) do
    #   UserAuth.log_in_user(conn, user, user_params)
    # else
    #   render(conn, "new.html", error_message: "Invalid email or password")
    # end
  end
end
