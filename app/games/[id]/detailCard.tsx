"use client";
import { Game } from "@/app/api/route";
import { useRouter } from "next/navigation";

export default function DetailCard({ game }: { game: Game }) {
  const router = useRouter();

  const removeGame = async () => {
    console.log("sending to api:", game.id);

    const response = await fetch("http://localhost:3000/api", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game.id),
    });

    if (response.ok) {
      // CODE TO EXECUTE AFTER DELETE
      router.push("/");
    } else {
      alert("Failed to delete");
    }
  };

  return (
    <div className="w-100 h-100 flex flex-col items-center justify-center bg-white border-2 border-gray-300 rounded-xl shadow-lg">
      <h1 className="font-bold m-4 capitalize text-3xl">{game.title} </h1>
      <h2 className="font-semibold capitalize text-xl mb-22">{game.genre}</h2>
      <button
        onClick={removeGame}
        className="cursor-pointer text-white bg-black p-6 rounded-xl transition duration-200 hover:bg-red-500 hover:text-black"
      >
        Remove Game
      </button>
    </div>
  );
}
