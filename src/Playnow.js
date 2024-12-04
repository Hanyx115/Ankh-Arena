import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Playnow.css";

const teams = [
  { name: "Arsenal", logo: "arsenal-logo.png", id: 1 },
  { name: "Chelsea", logo: "chelsea-logo.png", id: 2 },
  { name: "Manchester United", logo: "manu-logo.png", id: 3 },
  { name: "Manchester City", logo: "man-city-logo.png", id: 4 },
  { name: "Liverpool", logo: "liverpool-logo.png", id: 5 },
  { name: "Tottenham Hotspur", logo: "tottenham-logo.png", id: 6 },
  { name: "Leeds United", logo: "leeds-logo.png", id: 7 },
  { name: "Everton", logo: "everton-logo.png", id: 8 },
  { name: "West Ham", logo: "westham-logo.png", id: 9 },
  { name: "Newcastle United", logo: "newcastle-logo.png", id: 10 },
  { name: "Leicester City", logo: "leicester-logo.png", id: 11 },
  { name: "Aston Villa", logo: "villa-logo.png", id: 12 },
  { name: "Southampton", logo: "southampton-logo.png", id: 13 },
  { name: "Wolverhampton", logo: "wolves-logo.png", id: 14 },
  { name: "Brighton", logo: "brighton-logo.png", id: 15 }
];

const PlayNow = ({callback}) => {
  const navigate = useNavigate();

  const handleCardClick = (teamId) => {
    // Navigate to a team-specific page
    navigate(`/team/${teamId}`);
  };

 
  return (
    <div className="playnow-container">
    <header>
      <h1>Welcome to AAL Arena</h1>
      <p>Choose Your Team</p>
    </header>
      <div className=" wrapper  title team-list">
        {teams.map((team) => (
          <div
          key={team.id}
          className="   team-card animate-fade-in" // Add animation class
          id={`team-${team.id}`}
          onClick={() => handleCardClick(team.id)}
        >
        </div>
        ))}
      </div>
    </div>
  );
};

export default PlayNow;





