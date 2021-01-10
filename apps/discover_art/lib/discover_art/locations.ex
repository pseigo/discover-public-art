defmodule DiscoverArt.Locations do
  @moduledoc """
  The Locations context.
  """

  import Ecto.Query, warn: false
  alias DiscoverArt.Repo

  alias DiscoverArt.Locations.PublicArt

  @doc """
  Returns the list of public_arts.

  ## Examples

      iex> list_public_arts()
      [%PublicArt{}, ...]

  """
  def list_public_arts do
    Repo.all(PublicArt)
  end

  @doc """
  Gets a single public_art.

  Raises `Ecto.NoResultsError` if the Public art does not exist.

  ## Examples

      iex> get_public_art!(123)
      %PublicArt{}

      iex> get_public_art!(456)
      ** (Ecto.NoResultsError)

  """
  def get_public_art!(id), do: Repo.get!(PublicArt, id)

  @doc """
  Creates a public_art.

  ## Examples

      iex> create_public_art(%{field: value})
      {:ok, %PublicArt{}}

      iex> create_public_art(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_public_art(attrs \\ %{}) do
    %PublicArt{}
    |> PublicArt.changeset(attrs)
    |> Repo.insert()
  end

  def maybe_create_public_art(attrs \\ %{}) do
    %PublicArt{}
    |> PublicArt.changeset(attrs)
    |> Repo.insert(on_conflict: :nothing)
  end

  @doc """
  Updates a public_art.

  ## Examples

      iex> update_public_art(public_art, %{field: new_value})
      {:ok, %PublicArt{}}

      iex> update_public_art(public_art, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_public_art(%PublicArt{} = public_art, attrs) do
    public_art
    |> PublicArt.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a public_art.

  ## Examples

      iex> delete_public_art(public_art)
      {:ok, %PublicArt{}}

      iex> delete_public_art(public_art)
      {:error, %Ecto.Changeset{}}

  """
  def delete_public_art(%PublicArt{} = public_art) do
    Repo.delete(public_art)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking public_art changes.

  ## Examples

      iex> change_public_art(public_art)
      %Ecto.Changeset{data: %PublicArt{}}

  """
  def change_public_art(%PublicArt{} = public_art, attrs \\ %{}) do
    PublicArt.changeset(public_art, attrs)
  end
end
