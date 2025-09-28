import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

app.get("/", function (request, response) {
  response.json({ message: "This is the root server endpoint!" });
});

app.get("/players", async (request, response) => {
  const query = await db.query(`SELECT * FROM players`);
  response.json(query.rows);
});

app.get("/players/:playerid", async (request, response) => {
  const query = await db.query(`SELECT * FROM players WHERE id = $1`, [
    request.params.playerid,
  ]);
  response.json(query.rows);
});

app.get("/players/:playerid/quests", async (request, response) => {
  const query = await db.query(
    `SELECT players.id AS "playerID", players.name AS "playerName", quests.id AS questID, quests.name AS "questName", quests.task, quests.exp, quests.reward
FROM players
JOIN player_quests ON players.id = player_quests.player_id
JOIN quests ON player_quests.quest_id = quests.id
WHERE players.id = $1 AND player_quests.completed = FALSE`,
    [request.params.playerid]
  );
  response.json(query.rows);
});

app.get("/quests", async (request, response) => {
  const query = await db.query(`SELECT * FROM quests`);
  response.json(query.rows);
});

app.get("/quests/:questid", async (request, response) => {
  const query = await db.query(`SELECT * FROM quests WHERE id = $1`, [
    request.params.questid,
  ]);
  response.json(query.rows);
});

app.get("/quests/:questid/players", async (request, response) => {
  try {
    const query = await db.query(
      `SELECT players.id AS "playerID", players.name AS "adventurer", quests.id AS "questID"
FROM players
JOIN player_quests ON players.id = player_quests.player_id
JOIN quests ON player_quests.quest_id = quests.id
WHERE quests.id = $1`,
      [request.params.questid]
    );
    response.json(query.rows);
  } catch (error) {
    console.error("failed to get quests/:questid/players", error);
    response.status(500).json({ success: false });
  }
});

app.get("/players/:playerid/availablequests", async (request, response) => {
  const query = await db.query(
    `SELECT quests.id, quests.name
FROM quests
WHERE NOT EXISTS (
    SELECT 1
    FROM player_quests
    WHERE player_quests.quest_id = quests.id
      AND player_quests.player_id = $1)`,
    [request.params.playerid]
  );
  response.json(query.rows);
});

// ========= POST ENDPOINTS =========

app.post("/add-player", (request, response) => {
  const playerData = request.body.formData;
  const query = db.query(
    `INSERT INTO players (name, level, race, class) VALUES ($1, $2, $3, $4)`,
    [playerData.name, playerData.level, playerData.race, playerData.class]
  );
});

app.post("/add-quest", (request, response) => {
  try {
    const questData = request.body.formData;
    const query = db.query(
      `INSERT INTO quests (name, task, exp, reward) VALUES ($1, $2, $3, $4)`,
      [questData.name, questData.task, questData.exp, questData.reward]
    );
  } catch (error) {
    console.error("Failed to add quest", error);
  }
});

app.post("/acceptquest", (request, response) => {
  try {
    const playerid = request.body.playerid;
    const questid = request.body.questid;
    console.log(`accepted ${questid} by player ${playerid}`);
    db.query(
      `INSERT INTO player_quests (player_id, quest_id) VALUES ($1, $2)`,
      [playerid, questid]
    );
  } catch (error) {
    console.error("Failed to accept quest", error);
  }
});

app.put("/completequest", (request, response) => {
  try {
    const { playerid, questid } = request.body;
    console.log(`player ${playerid} has completed quest ${questid}`);
    db.query(
      `UPDATE player_quests SET player_id = $1, quest_id = $2, completed = TRUE
      WHERE player_id = $1 AND quest_id = $2`,
      [playerid, questid]
    );
  } catch (error) {
    console.error("Error completing quest ", error);
    response.status(500).json({ success: false });
  }
});

app.delete("/deleteplayer/:playerid", (request, response) => {
  console.log(`deleted player ${request.params.playerid}`);
  db.query(`DELETE FROM player_quests WHERE player_id = $1`, [
    request.params.playerid,
  ]);
  db.query(`DELETE FROM players WHERE id = $1;`, [request.params.playerid]);
});

app.delete("/deletequest/:questid", (request, response) => {
  console.log(`deleted quest ${request.params.questid}`);
  db.query(`DELETE FROM player_quests WHERE quest_id = $1`, [
    request.params.questid,
  ]);
  db.query(`DELETE FROM quests WHERE id = $1;`, [request.params.questid]);
});
