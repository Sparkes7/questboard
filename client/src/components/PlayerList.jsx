import { useEffect, useState } from "react";
import { Link } from "react-router";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

export default function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE}/players`
      );
      const data = await response.json();
      setPlayers(data);
    }
    getPlayers();

    const interval = setInterval(() => {
      // console.log("interval");
      getPlayers();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AddPlayerForm />
      <section>
        <h1>All Players:</h1>
        <div className="list-container">
          {players.map((player) => (
            // <Player key={player.id} player={player} onClick={handleClick} />
            <Link
              key={player.id}
              to={`/players/${player.id}`}
              className="list-item"
            >
              {player.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
