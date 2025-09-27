import { useEffect, useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router";
import AddQuestForm from "./AddQuestForm";

export default function QuestList() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    async function getQuests() {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE}/quests`
      );
      const data = await response.json();
      setQuests(data);
    }
    getQuests();

    const interval = setInterval(() => {
      getQuests();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log(quests);

  return (
    <>
      <AddQuestForm />
      <h1>All Quests:</h1>
      <div className="list-container">
        {quests.map((quest) => (
          <Link key={quest.id} to={"/quests/" + quest.id} className="list-item">
            {quest.name}
          </Link>
        ))}
      </div>
    </>
  );
}
