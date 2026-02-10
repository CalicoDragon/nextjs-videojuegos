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

// You have to send ID here
export async function DELETE(req: Request) {
  const { id } = await req.json();
  const index = games.findIndex((item) => item.id === id);

  // Response if it isnt found
  if (index == -1) {
    return Response.json("Game not found", {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const removedGame = games.splice(index, 1);

  return Response.json(removedGame, {
    status: 202,
    headers: { "Content-Type": "application/json" },
  });
}
