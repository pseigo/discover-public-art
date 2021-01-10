defmodule DiscoverArt.Accounts.CheckIn do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key false

  schema "check_ins" do
    belongs_to :user, DiscoverArt.Accounts.User, on_replace: :delete, primary_key: true
    belongs_to :public_art, DiscoverArt.Locations.PublicArt, type: :string, on_replace: :delete, primary_key: true

    timestamps()
  end

  @doc false
  def changeset(check_in, attrs) do
    check_in
    |> cast(attrs, [:user_id, :public_art_id])
    |> validate_required([:user_id, :public_art_id])
  end
end
