defmodule DiscoverArt.Repo.Migrations.CreatePublicArts do
  use Ecto.Migration

  def change do
    create table(:public_arts, primary_key: false) do
      add :id, :string, primary_key: true

      timestamps()
    end

  end
end
