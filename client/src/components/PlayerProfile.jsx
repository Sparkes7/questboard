import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router";
import QuestsPlayerHas from "./QuestsPlayerHas";
import AvailableQuests from "./AvailableQuests";

export default function PlayerProfile() {
  let { playerid } = useParams();
  const [player, setPlayer] = useState({});

  useEffect(() => {
    async function getPlayer() {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE}/players/${playerid}`
      );
      const data = await response.json();
      setPlayer(data[0]);
    }
    getPlayer();
  }, [playerid]);

  console.log(player);

  return (
    <>
      <h1>Player Profile:</h1>
      <p>{player.name}</p>
      <p>{player.level}</p>
      <p>{player.class}</p>
      <p>{player.race}</p>
      <Link to={`/players/${playerid}/quests`} element={<QuestsPlayerHas />}>
        Quests this player has
      </Link>
      <Link
        to={`/players/${playerid}/availablequests`}
        element={<AvailableQuests />}
      >
        Available Quests
      </Link>
      <Outlet />
    </>
  );
}
