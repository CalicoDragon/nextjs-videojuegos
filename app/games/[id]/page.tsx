"use server";
import { Game } from "@/app/api/route";
import { redirect } from "next/navigation";
import DetailCard from "./detailCard";

export default async function GamePage({ params }: { params: { id: String } }) {
  // Fetch section
  const response = await fetch("http://localhost:3000/api", {
    cache: "no-store",
  });

  const games: Array<Game> = await response.json();
  const gameId = (await params).id;

  // Found game
  const game = games.find((item) => item.id === Number(gameId));

  // check if game exists
  if (game === undefined)
    return (
      <div className="flex h-screen items-center justify-center">
        Error 404 | Not found
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <DetailCard game={game} />
    </div>
  );
}
