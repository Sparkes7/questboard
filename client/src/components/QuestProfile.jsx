import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router";
import PlayersOnQuest from "./PlayersOnQuest";

export default function QuestProfile() {
  const [quest, setQuest] = useState({});
  let { questid } = useParams();

  useEffect(() => {
    async function getQuest() {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE}/quests/${questid}`
      );
      const data = await response.json();
      //console.log(data);
      setQuest(data[0]);
    }
    getQuest();
  }, [questid]);

  return (
    <>
      <h2>{quest.name}</h2>
      <p>{quest.task}</p>
      <p>Experience Reward: {quest.exp}</p>
      <p>Item Reward: {quest.reward}</p>
      <div className="outlet-links">
        <Link
          to={`/quests/${questid}/players`}
          element={<PlayersOnQuest />}
          className="list-item"
        >
          Players on Quest
        </Link>
        <Link
          to={`/quests/${questid}/deletequest`}
          className="delete-character-link"
        >
          Delete Quest
        </Link>
      </div>
      <Outlet />
    </>
  );
}
