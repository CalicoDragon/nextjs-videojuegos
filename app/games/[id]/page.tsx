export default async function GamePage({ params }: { params: { id: String } }) {
  const gameId = (await params).id;
  return (
    <div>
      <h1>specific game </h1>
      <p>id: {gameId}</p>
    </div>
  );
}
