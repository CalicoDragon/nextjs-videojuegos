export type Game = {
  id: Number;
  title: String;
  genre: String;
};

const games: Array<Game> = [];

export async function GET() {
  return Response.json(games, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  const { title, genre } = await req.json();
  const newGame: Game = { id: Date.now(), title, genre };
  games.push(newGame);

  return Response.json(newGame, {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
