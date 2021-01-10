defmodule DiscoverArt.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:display_name, :email, :join_date]}

  schema "users" do
    field :display_name, :string
    field :email, :string
    field :password, :string, virtual: true
    field :password_hash, :string
    field :join_date, :utc_datetime

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:password, :password_hash, :email, :display_name])
    |> unique_constraint(:email)
    |> validate_required([:email, :display_name])
    |> put_password_hash()
  end

  defp put_password_hash(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: pass}} ->
        put_change(changeset, :password_hash, Pbkdf2.add_hash(pass).password_hash)
      _ ->
        changeset
    end
  end

  @doc """
  Verifies the password.

  If there is no user or the user doesn't have a password, we call
  `Bcrypt.no_user_verify/0` to avoid timing attacks.
  """
  def valid_password?(%DiscoverArt.Accounts.User{password_hash: password_hash}, password)
      when is_binary(password_hash) and byte_size(password) > 0 do
    Pbkdf2.check_pass(%{password_hash: password_hash}, password)
  end

end
