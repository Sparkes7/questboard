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

  //console.log(player);

  return (
    <section>
      <h2>Player Profile:</h2>
      <p>
        {player.name}, Level {player.level}
      </p>
      <p></p>
      <p>
        {player.race} {player.class}
      </p>
      <div className="outlet-links">
        <Link
          to={`/players/${playerid}/quests`}
          element={<QuestsPlayerHas />}
          className="list-item"
        >
          Character Questlog
        </Link>
        <Link
          to={`/players/${playerid}/availablequests`}
          element={<AvailableQuests />}
          className="list-item"
        >
          Available Quests
        </Link>
        <Link
          to={`/players/${playerid}/deletecharacter`}
          className="delete-character-link"
        >
          Delete Character
        </Link>
      </div>
      <Outlet />
    </section>
  );
}
