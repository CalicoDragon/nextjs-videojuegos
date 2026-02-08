import GameForm from "@/components/game-form";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api", {
    cache: "no-store",
  });

  const games = await response.json();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Games List</h1>
      <ul>
        {games.map((game: any) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
      <GameForm></GameForm>
    </div>
  );
}
