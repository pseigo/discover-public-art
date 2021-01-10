defmodule DiscoverArt.Locations.PublicArt do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :string, autogenerate: false}

  schema "public_arts" do
    # field :id, :string

    timestamps()
  end

  @doc false
  def changeset(public_art, attrs) do
    public_art
    |> cast(attrs, [:id])
    |> validate_required([:id])
  end
end
