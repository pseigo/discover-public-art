defmodule DiscoverArt.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string
      add :password_hash, :string
      add :display_name, :string
      add :join_date, :utc_datetime

      timestamps()
    end
  end
end
