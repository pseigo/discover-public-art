# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     DiscoverArt.Repo.insert!(%DiscoverArt.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias DiscoverArt.Accounts
alias DiscoverArt.Locations

Accounts.create_user(
  %{email: "peyton@example.com", display_name: "Peyton", password: "password"}
)

Locations.create_public_art(%{id: "a6cd75f5542e54b079fec4b644d0ebdd719d8cb0"})
Locations.create_public_art(%{id: "69c5286badddecc240d6f5f5783b37e7fcce674c"})
Locations.create_public_art(%{id: "bcd02c2d4d1c0b3c91cde0c42daec86a56744213"})
Locations.create_public_art(%{id: "362bd6122ae9ba11e212f07c068a96394354cbc0"})

Accounts.create_check_in(%{user_id: 1, public_art_id: "a6cd75f5542e54b079fec4b644d0ebdd719d8cb0"})
Accounts.create_check_in(%{user_id: 1, public_art_id: "69c5286badddecc240d6f5f5783b37e7fcce674c"})
