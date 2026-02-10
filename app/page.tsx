"use server";
import { Game } from "./api/route";
import GamesList from "./gamesList";

export default async function Home() {
  // Fetch section
  const response = await fetch("http://localhost:3000/api", {
    cache: "no-store",
  });

  const games: Array<Game> = await response.json();

  return <GamesList games={games} />;
}
