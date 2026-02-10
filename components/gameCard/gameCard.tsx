"use client";
import { Game } from "@/app/api/route";
import styles from "./gameCard.module.css";

export default function GameCard({ game }: { game: Game }) {
  const onPress = () => {
    console.log("nice");
  };

  return (
    <div onClick={onPress} className={styles.card}>
      <h1 className="font-bold capitalize">{game.title}</h1>
      <h2 className="text-gray-600 capitalize">{game.genre}</h2>
    </div>
  );
}
