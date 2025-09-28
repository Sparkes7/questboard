import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PlayerList from "./components/PlayerList";
import PlayerProfile from "./components/PlayerProfile";
import QuestList from "./components/QuestList";
import QuestProfile from "./components/QuestProfile";
import PlayersOnQuest from "./components/PlayersOnQuest";
import QuestsPlayerHas from "./components/QuestsPlayerHas";
import DeleteCharacter from "./components/DeleteCharacter";
import AvailableQuests from "./components/AvailableQuests";
import DeleteQuest from "./components/DeleteQuest";

import { Routes, Route, Link } from "react-router";

export default function App() {
  return (
    <>
      <Link to="/" className="branding">
        Quest Board
      </Link>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<PlayerList />} />
        <Route path="/players/:playerid" element={<PlayerProfile />}>
          <Route path="quests" element={<QuestsPlayerHas />} />
          <Route path="availablequests" element={<AvailableQuests />} />
          <Route path="deletecharacter" element={<DeleteCharacter />} />
        </Route>

        <Route path="/quests" element={<QuestList />} />
        <Route path="/quests/:questid" element={<QuestProfile />}>
          <Route path="players" element={<PlayersOnQuest />} />
          <Route path="deletequest" element={<DeleteQuest />} />
        </Route>
      </Routes>
    </>
  );
}
