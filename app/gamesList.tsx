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
    <div className="flex flex-col font-sans mt-20  dark:bg-black">
      {/* turn games array into GameCards */}
      <div className="flex flex-wrap gap-4 m-6">
        {games.map((game: Game) => (
          <GameCard key={game.id.toString()} game={game} />
        ))}
        <AddCard
          clickAdd={() => {
            setIsOpen(true);
          }}
        />
      </div>

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
