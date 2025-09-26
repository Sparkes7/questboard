import { useEffect, useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router";
import AddQuestForm from "./AddQuestForm";

export default function QuestList() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    async function getQuests() {
      const response = await fetch("http://localhost:8080/quests");
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
      {quests.map((quest) => (
        <Link key={quest.id} to={"/quests/" + quest.id}>
          <p>{quest.name}</p>
        </Link>
      ))}
    </>
  );
}
