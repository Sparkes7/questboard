import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";

export default function PlayersOnQuest() {
  const { questid } = useParams();
  const [playerQuests, setPlayerQuests] = useState([]);

  useEffect(() => {
    async function getPlayersOnQuest() {
      const response = await fetch(
        `http://localhost:8080/quests/${questid}/players`
      );
      const data = await response.json();
      setPlayerQuests(data);
    }
    getPlayersOnQuest();
  }, [questid]);
  console.log(playerQuests);

  return (
    <>
      <h1>Players on quest</h1>
      {playerQuests.map((player, i) => {
        return (
          <Link key={i} to={`/players/${player.playerID}`}>
            <p>{player.adventurer}</p>
          </Link>
        );
      })}
    </>
  );
}
