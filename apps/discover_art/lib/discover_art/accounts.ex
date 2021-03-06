defmodule DiscoverArt.Accounts do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false
  alias DiscoverArt.Repo

  alias DiscoverArt.Accounts.{User, UserToken}

    @doc """
  Gets a user by email.

  ## Examples

      iex> get_user_by_email("foo@example.com")
      %User{}

      iex> get_user_by_email("unknown@example.com")
      nil

  """
  def get_user_by_email(email) when is_binary(email) do
    Repo.get_by(User, email: email)
  end

  @doc """
  Gets a user by email and password.

  ## Examples

      iex> get_user_by_email_and_password("foo@example.com", "correct_password")
      %User{}

      iex> get_user_by_email_and_password("foo@example.com", "invalid_password")
      nil

  """
  def get_user_by_email_and_password(email, password)
      when is_binary(email) and is_binary(password) do
    user = Repo.get_by(User, email: email)
    if User.valid_password?(user, password), do: user
  end

  @doc """
  Returns the list of users.

  ## Examples

      iex> list_users()
      [%User{}, ...]

  """
  def list_users do
    Repo.all(User)
  end

  @doc """
  Gets a single user.

  Raises `Ecto.NoResultsError` if the User does not exist.

  ## Examples

      iex> get_user!(123)
      %User{}

      iex> get_user!(456)
      ** (Ecto.NoResultsError)

  """
  def get_user!(id), do: Repo.get!(User, id)

  @doc """
  Creates a user.

  ## Examples

      iex> create_user(%{field: value})
      {:ok, %User{}}

      iex> create_user(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a user.

  ## Examples

      iex> update_user(user, %{field: new_value})
      {:ok, %User{}}

      iex> update_user(user, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a user.

  ## Examples

      iex> delete_user(user)
      {:ok, %User{}}

      iex> delete_user(user)
      {:error, %Ecto.Changeset{}}

  """
  def delete_user(%User{} = user) do
    Repo.delete(user)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking user changes.

  ## Examples

      iex> change_user(user)
      %Ecto.Changeset{data: %User{}}

  """
  def change_user(%User{} = user, attrs \\ %{}) do
    User.changeset(user, attrs)
  end

  ## Session

  @doc """
  Generates a session token.
  """
  def generate_user_session_token(user) do
    {token, user_token} = UserToken.build_session_token(user)
    Repo.insert!(user_token)
    token
  end

  @doc """
  Gets the user with the given signed token.
  """
  def get_user_by_session_token(token) do
    {:ok, query} = UserToken.verify_session_token_query(token)
    Repo.one(query)
  end

  @doc """
  Deletes the signed token with the given context.
  """
  def delete_session_token(token) do
    Repo.delete_all(UserToken.token_and_context_query(token, "session"))
    :ok
  end

  alias DiscoverArt.Accounts.CheckIn

  @doc """
  Returns the list of check_ins.

  ## Examples

      iex> list_check_ins()
      [%CheckIn{}, ...]

  """
  def list_check_ins do
    Repo.all(CheckIn)
  end

  @doc """
  Returns the list of check_ins for a particular user.

  ## Examples

      iex> list_check_ins()
      [%CheckIn{}, ...]

  """
  def list_check_ins(user_id) do
    Repo.all(from row in CheckIn, where: row.user_id == ^user_id)
  end

  @doc """
  Gets a single check_in.

  Raises `Ecto.NoResultsError` if the Check in does not exist.

  ## Examples

      iex> get_check_in!(123)
      %CheckIn{}

      iex> get_check_in!(456)
      ** (Ecto.NoResultsError)

  """
  def get_check_in!(id), do: Repo.get!(CheckIn, id)

  def get_check_in!(user_id, public_art_id), do: Repo.get_by!(CheckIn, [user_id: user_id, public_art_id: public_art_id])

  @doc """
  Creates a check_in.

  ## Examples

      iex> create_check_in(%{field: value})
      {:ok, %CheckIn{}}

      iex> create_check_in(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_check_in(attrs \\ %{}) do
    %CheckIn{}
    |> CheckIn.changeset(attrs)
    |> Repo.insert()
  end

  def maybe_create_check_in(attrs \\ %{}) do
    %CheckIn{}
    |> CheckIn.changeset(attrs)
    |> Repo.insert(on_conflict: :nothing)
  end

  @doc """
  Updates a check_in.

  ## Examples

      iex> update_check_in(check_in, %{field: new_value})
      {:ok, %CheckIn{}}

      iex> update_check_in(check_in, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_check_in(%CheckIn{} = check_in, attrs) do
    check_in
    |> CheckIn.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a check_in.

  ## Examples

      iex> delete_check_in(check_in)
      {:ok, %CheckIn{}}

      iex> delete_check_in(check_in)
      {:error, %Ecto.Changeset{}}

  """
  def delete_check_in(%CheckIn{} = check_in) do
    Repo.delete(check_in)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking check_in changes.

  ## Examples

      iex> change_check_in(check_in)
      %Ecto.Changeset{data: %CheckIn{}}

  """
  def change_check_in(%CheckIn{} = check_in, attrs \\ %{}) do
    CheckIn.changeset(check_in, attrs)
  end
end
