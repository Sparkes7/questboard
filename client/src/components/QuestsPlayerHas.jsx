import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

export default function QuestsPlayerHas() {
  let { playerid } = useParams();
  const [questsPlayerHas, setQuestsPlayerHas] = useState([]);

  useEffect(() => {
    async function getQuestsPlayerHas() {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE}/players/${playerid}/quests`
      );
      const data = await response.json();
      setQuestsPlayerHas(data);
    }
    getQuestsPlayerHas();

    const interval = setInterval(() => {
      getQuestsPlayerHas();
    }, 1000);
    return () => clearInterval(interval);
  }, [playerid]);

  //console.log(questsPlayerHas);

  function CompleteQuest(questid) {
    fetch(`${import.meta.env.VITE_SERVER_BASE}/completequest`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playerid, questid }),
    });
  }

  return (
    <>
      <h3>Quests Character Has: </h3>
      {questsPlayerHas.length > 0 ? (
        questsPlayerHas.map((quest, i) => {
          return (
            <div key={i}>
              <div className="outlet-item">
                <Link to={`/quests/${quest.questid}`} className="outlet-a">
                  {quest.questName}
                </Link>
                <button
                  className="quest-btn"
                  onClick={(e) => {
                    e.target.disabled = true;
                    CompleteQuest(quest.questid);
                  }}
                >
                  Complete Quest
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>This player is not currently on any quests</p>
      )}
    </>
  );
}
