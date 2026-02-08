const games: Array<any> = [];

export async function GET() {
  return Response.json(games, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  const { title } = await req.json();
  const newGame = { id: Date.now().toString(), title };
  games.push(newGame);

  return Response.json(newGame, {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
