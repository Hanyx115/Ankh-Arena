import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./LeagueStanding.css";
import { motion } from "framer-motion";


const teams = [
  { 
    name: "Manchester City", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Erling Haaland", goals: 0, assists: 0 },
      { name: "Kevin De Bruyne", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Arsenal", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Bukayo Saka", goals: 0, assists: 0 },
      { name: "Gabriel Martinelli", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Liverpool", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Mohamed Salah", goals: 0, assists: 0 },
      { name: "Darwin Núñez", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Tottenham", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Harry Kane", goals: 0, assists: 0 },
      { name: "Son Heung-min", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Newcastle", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Callum Wilson", goals: 0, assists: 0 },
      { name: "Bruno Guimarães", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Aston Villa", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Ollie Watkins", goals: 0, assists: 0 },
      { name: "Jacob Ramsey", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Brighton", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Leandro Trossard", goals: 0, assists: 0 },
      { name: "Pascal Groß", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Chelsea", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Raheem Sterling", goals: 0, assists: 0 },
      { name: "Mason Mount", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Southampton", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Ivan Toney", goals: 0, assists: 0 },
      { name: "Bryan Mbeumo", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Fulham", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Aleksandar Mitrovic", goals: 0, assists: 0 },
      { name: "Andreas Pereira", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "West Ham", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Michail Antonio", goals: 0, assists: 0 },
      { name: "Jarrod Bowen", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Leeds", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Wilfried Zaha", goals: 0, assists: 0 },
      { name: "Eberechi Eze", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Manchester United", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Bruno Fernandes", goals: 0, assists: 0 },
      { name: "Marcus Rashford", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Palestino", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Gomana yehia", goals: 0, assists: 0 },
      { name: "Dino", goals: 0, assists: 0 },
    ]
  },
  { 
    name: "Leicester", 
    played: 0, 
    won: 0, 
    drawn: 0, 
    lost: 0, 
    points: 0, 
    players: [
      { name: "Ashley Barnes", goals: 0, assists: 0 },
      { name: "Josh Brownhill", goals: 0, assists: 0 },
    ]
  }
];

const LeagueStanding = () => {
  const location = useLocation();
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [currentTeams, setCurrentTeams] = useState(teams);

  // Extract the selected team ID from the query parameter
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const teamId = parseInt(queryParams.get("teamId"), 10);
    setSelectedTeam(teamId ? teamId - 1 : null); // Match the index for 0-based array
  }, [location.search]);

  const shuffleTeams = () => {
    const shuffledTeams = [...currentTeams];

    for (let i = shuffledTeams.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledTeams[i], shuffledTeams[j]] = [shuffledTeams[j], shuffledTeams[i]];
    }

    const updatedTeams = shuffledTeams.map((team) => {
      const randomLost = Math.floor(Math.random() * 10);
      const randomDrawn = Math.floor(Math.random() * 5);
      const randomWon = 30 - (randomLost + randomDrawn);
      const points = randomWon * 3 + randomDrawn;

      const randomPlayers = [...team.players]
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)
        .map((player) => ({
          ...player,
          goals: Math.floor(Math.random() * 51),
          assists: Math.floor(Math.random() * 31),
        }));

      return {
        ...team,
        won: randomWon,
        drawn: randomDrawn,
        lost: randomLost,
        points,
        players: randomPlayers,
      };
    });

    updatedTeams.sort((a, b) => b.points - a.points);
    setCurrentTeams(updatedTeams);
  };

  return (
    <div className="league-container">
      <h1>Ankh-Arena League Standings</h1>
      <button onClick={shuffleTeams} className="shuffle-button">
        Simulate Standings
      </button>
      <table className="league-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {currentTeams.map((team, index) => (
            <React.Fragment key={index}>
              <tr
                onClick={() => setSelectedTeam(index)}
                className={`team-row ${selectedTeam === index ? "highlighted" : ""}`}
              >
                <td>{index + 1}</td>
                <td>{team.name}</td>
                <td>{team.won + team.drawn + team.lost}</td>
                <td>{team.won}</td>
                <td>{team.drawn}</td>
                <td>{team.lost}</td>
                <td>{team.points}</td>
              </tr>

              {selectedTeam === index && (
                <tr className="player-stats-row">
                  <td colSpan="7">
                    <div className="player-stats">
                      {team.players.map((player, playerIndex) => (
                        <div key={playerIndex}>
                          <strong>{player.name}</strong>: {player.goals} goals, {player.assists} assists
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueStanding;
