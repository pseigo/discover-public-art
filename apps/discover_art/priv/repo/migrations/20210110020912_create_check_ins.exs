defmodule DiscoverArt.Repo.Migrations.CreateCheckIns do
  use Ecto.Migration

  def change do
    create table(:check_ins, primary_key: false) do
      add :user_id, references(:users, on_update: :update_all, on_delete: :delete_all), primary_key: true
      add :public_art_id, references(:public_arts, on_update: :update_all, on_delete: :delete_all, type: :string), primary_key: true

      timestamps()
    end

  end
end
