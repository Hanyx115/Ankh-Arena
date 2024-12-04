import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const userInfo = {
    name: "Hamo El Ti5a",
    teamName: "Golden Pharaohs",
    rank: 512,
    points: 1543,
    gameweekPoints: 67,
    totalTransfers: 25,
    budget: "98.5M",
  };

  const recentPlayers = [
    { name: "Mohamed Salah", points: 12, position: "MID" },
    { name: "Trezeguet", points: 9, position: "MID" },
    { name: "El-Hadary", points: 6, position: "GK" },
    { name: "Yakout", points: 15, position: "FWD" },
    { name: "Dino", points: 7, position: "DEF" },
  ];

  const features = [
    { title: "Transfers", description: "Manage your team and swap players." },
    { title: "Points History", description: "Track your performance each gameweek." },
    { title: "Global Leagues", description: "See how you rank worldwide." },
    { title: "Mini-Leagues", description: "Compete with your friends." },
  ];

  const leaderboard = [
    { rank: 1, name: "Mido FC", points: 1821 },
    { rank: 2, name: "Pharaoh Kings", points: 1754 },
    { rank: 3, name: "Alex Lions", points: 1722 },
    { rank: 4, name: "Red Falcons", points: 1708 },
    { rank: 5, name: "Sphinx United", points: 1685 },
  ];

  const detailedStats = [
    { name: "Mohamed Salah", goals: 22, assists: 12, cleanSheets: 6 },
    { name: "Trezeguet", goals: 10, assists: 8, cleanSheets: 5 },
    { name: "El-Hadary", goals: 0, assists: 0, cleanSheets: 12 },
    { name: "Yakout", goals: 18, assists: 9, cleanSheets: 2 },
    { name: "Dino", goals: 3, assists: 4, cleanSheets: 8 },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Fantasy Dashboard</h1>
        <h2>Welcome, {userInfo.name}!</h2>
      </header>

      <div className="profile-section">
        <div className="profile-card">
          <h3>{userInfo.teamName}</h3>
          <p>Rank: #{userInfo.rank}</p>
          <p>Total Points: {userInfo.points}</p>
          <p>Gameweek Points: {userInfo.gameweekPoints}</p>
          <p>Total Transfers: {userInfo.totalTransfers}</p>
          <p>Budget: {userInfo.budget}</p>
        </div>
        <div className="recent-players">
          <h3>Top Performers</h3>
          <ul>
            {recentPlayers.map((player, index) => (
              <li key={index}>
                <strong>{player.name}</strong> ({player.position}) - {player.points} pts
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="features-section">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="leaderboard-section">
        <h3>Global Leaderboard</h3>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((team, index) => (
              <tr key={index}>
                <td>{team.rank}</td>
                <td>{team.name}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="detailed-stats-section">
        <h3>Player Detailed Stats</h3>
        <table className="detailed-stats-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>Clean Sheets</th>
            </tr>
          </thead>
          <tbody>
            {detailedStats.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>{player.cleanSheets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
