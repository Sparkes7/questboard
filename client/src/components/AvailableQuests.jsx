import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

export default function AvailableQuests() {
  const { playerid } = useParams();
  const [availableQuests, setAvailableQuests] = useState([]);

  useEffect(() => {
    async function getAvailableQuests() {
      const response = await fetch(
        `${
          import.meta.env.VITE_SERVER_BASE
        }/players/${playerid}/availablequests`
      );
      const data = await response.json();
      setAvailableQuests(data);
    }
    getAvailableQuests();

    const interval = setInterval(() => {
      getAvailableQuests();
    }, 1000);

    return () => clearInterval(interval);
  }, [playerid]);

  //
  function AcceptQuest(questid) {
    console.log(questid, playerid);
    console.log(questid);
    try {
      fetch(`${import.meta.env.VITE_SERVER_BASE}/acceptquest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ questid, playerid }),
      });
    } catch (error) {
      console.error("failed posting new quest", error);
    }
  }

  return (
    <>
      <h3>Available Quests</h3>
      {availableQuests.map((quest, i) => {
        return (
          <div key={i} className="outlet-item">
            <Link to={`/quests/${quest.id}`} className="outlet-a">
              {quest.name}
            </Link>
            <button
              className="quest-btn"
              onClick={(e) => {
                e.target.disabled = true;
                AcceptQuest(quest.id);
              }}
            >
              Accept Quest
            </button>
            {console.log()}
          </div>
        );
      })}
    </>
  );
}
