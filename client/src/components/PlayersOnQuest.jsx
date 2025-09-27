import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";

export default function PlayersOnQuest() {
  const { questid } = useParams();
  const [playerQuests, setPlayerQuests] = useState([]);

  useEffect(() => {
    async function getPlayersOnQuest() {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE}/quests/${questid}/players`
      );
      const data = await response.json();
      setPlayerQuests(data);
    }
    getPlayersOnQuest();
  }, [questid]);
  //console.log(playerQuests);

  return (
    <>
      <h3>All characters listed are currently on this quest</h3>
      {playerQuests.length > 0 ? (
        playerQuests.map((player, i) => {
          return (
            <div className="outlet-item" key={i}>
              <Link
                key={i}
                to={`/players/${player.playerID}`}
                className="outlet-a"
              >
                {player.adventurer}
              </Link>
            </div>
          );
        })
      ) : (
        <p>No characters are on this quests</p>
      )}
    </>
  );
}
