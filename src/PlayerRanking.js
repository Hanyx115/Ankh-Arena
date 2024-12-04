import React, { useState } from "react";
import "./PlayerRanking.css";
import LeagueStanding from "./LeagueStanding";

// Player data
const players = [
  { name: "Mohamed Salah", team: "Liverpool", goals: 48, assists: 15 },
  { name: "Harry Kane", team: "Tottenham", goals: 30, assists: 3 },
  { name: "Ahmed Hany", team: "Manchester United", goals: 22, assists: 6 },
  { name: "Yakout", team: "Liverpool", goals: 15, assists: 9 },
  { name: "Callum Wilson", team: "Newcastle", goals: 9, assists: 4 },
  { name: "Bukayo Saka", team: "Arsenal", goals: 8, assists: 5 },
  { name: "Aleksandar Mitrovic", team: "Fulham", goals: 8, assists: 2 },
  { name: "Ollie Watkins", team: "Aston Villa", goals: 8, assists: 3 },
  { name: "Leandro Trossard", team: "Brighton", goals: 6, assists: 3 },
  { name: "Kevin De Bruyne", team: "Manchester City", goals: 6, assists: 10 },
  { name: "Gabriel Martinelli", team: "Arsenal", goals: 7, assists: 3 },
  { name: "Gomana Yehia", team: "Tottenham", goals: 7, assists: 4 },
  { name: "Son Heung-min", team: "Tottenham", goals: 6, assists: 2 },
];

const PlayerRanking = () => {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("goals"); // Default sorting by goals

  // Handle search input change
  const handleFilterChange = (e) => setFilter(e.target.value.toLowerCase());

  // Handle sorting
  const handleSortChange = (criteria) => setSortBy(criteria);

  // Filter and sort players
  const filteredPlayers = players
    .filter((player) => player.name.toLowerCase().includes(filter))
    .sort((a, b) => {
      if (sortBy === "goals") return b.goals - a.goals;
      if (sortBy === "assists") return b.assists - a.assists;
      if (sortBy === "total") return b.goals + b.assists - (a.goals + a.assists);
      return 0;
    });

  return (
    <div className="player-ranking-container">
      <h1>Player Rankings</h1>

      {/* Search Bar */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search players..."
          onChange={handleFilterChange}
        />
      </div>

      {/* Sorting Options */}
      <div className="sort-container">
        <button onClick={() => handleSortChange("goals")}>Sort by Goals</button>
        <button onClick={() => handleSortChange("assists")}>
          Sort by Assists
        </button>
        <button onClick={() => handleSortChange("total")}>
          Sort by Total (Goals + Assists)
        </button>
      </div>

      {/* Player Table */}
      <table className="player-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Team</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
              <td>{player.goals + player.assists}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerRanking;
