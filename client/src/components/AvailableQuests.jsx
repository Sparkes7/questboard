import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

export default function AvailableQuests() {
  const { playerid } = useParams();
  const [availableQuests, setAvailableQuests] = useState([]);

  useEffect(() => {
    async function getAvailableQuests() {
      const response = await fetch(
        `http://localhost:8080/players/${playerid}/availablequests`
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
      fetch("http://localhost:8080/acceptquest", {
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
      <h1>Available Quests</h1>
      {availableQuests.map((quest) => {
        return (
          <div>
            <Link to={`/quests/${quest.id}`}>{quest.name}</Link>
            <button
              id="btn"
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
