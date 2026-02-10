"use client";
import GameCard from "@/components/gameCard/gameCard";
import { Game } from "./api/route";
import AddCard from "@/components/gameCard/addCard";
import GameForm from "@/components/game-form";
import { useState } from "react";

export default function GamesList({ games }: { games: Array<Game> }) {
  // Modal Section
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* turn games array into GameCards */}
      {games.map((game: Game) => (
        <GameCard key={game.id.toString()} game={game} />
      ))}
      <AddCard
        clickAdd={() => {
          setIsOpen(true);
        }}
      />

      {/* Modal GameForm */}
      <GameForm
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
}
