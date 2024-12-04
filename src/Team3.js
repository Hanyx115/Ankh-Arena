import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./PickTeam424.css";
import LeagueStanding from "./LeagueStanding";

const players424 = [
  { name: "El-Hadary", position: "GK", team: "Egypt", color: "#C8102E" },
  { name: "Hany Said", position: "DEF", team: "Egypt", color: "#C8102E" },
  { name: "Dino", position: "DEF", team: "Egypt", color: "#C8102E" },
  { name: "Gedo", position: "DEF", team: "Egypt", color: "#C8102E" },
  { name: "Salah", position: "MID", team: "Egypt", color: "#C8102E" },
  { name: "Tamer Hosny", position: "MID", team: "Egypt", color: "#C8102E" },
  { name: "Ahmed Fathi", position: "MID", team: "Palestine", color: "#FF0D00" },
  { name: "Trezeguet", position: "MID", team: "Egypt", color: "#C8102E" },
  { name: "Gomana", position: "FWD", team: "Egypt", color: "#C8102E" },
  { name: "Ahmed Hany", position: "FWD", team: "Egypt", color: "#C8102E" },
  { name: "Yakout", position: "FWD", team: "Egypt", color: "#C8102E" },
  { name: "Saleh", position: "GK", team: "Palestine", color: "#FF0D00" },
  { name: "Khaled Salem", position: "FWD", team: "Palestine", color: "#FF0D00" },
  { name: "Sharbini", position: "MID", team: "Palestine", color: "#FF0D00" },
  { name: "Darwich", position: "DEF", team: "Palestine", color: "#FF0D00" },
];

const initialFormation424 = {
  GK: [0],
  DEF: [1, 2, 3, 4],
  MID: [5, 6, 7, 8],
  FWD: [9, 10],
};  

const PickTeam424 = () => {
  const [formation, setFormation] = useState(initialFormation424);
  const [subs, setSubs] = useState([11, 12, 13, 14]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const navigate = useNavigate(); // Initialize navigation hook
  const handlechoose = () => {
    navigate('/LeagueStanding')
  }

  const handlePlayerSelect = (playerIndex, fromSubs) => {
    if (!selectedPlayer) {
      setSelectedPlayer({ playerIndex, fromSubs });
    } else {
      const { playerIndex: firstIndex, fromSubs: isFirstFromSubs } = selectedPlayer;

      if (isFirstFromSubs === fromSubs) {
        alert("Please select one player from the field and one from substitutes.");
        setSelectedPlayer(null);
        return;
      }

      if (isFirstFromSubs) {
        performSwap(firstIndex, playerIndex);
      } else {
        performSwap(playerIndex, firstIndex);
      }

      setSelectedPlayer(null);
    }
  };

  const performSwap = (subIndex, fieldIndex) => {
    const newFormation = { ...formation };
    const newSubs = [...subs];

    for (const role in newFormation) {
      if (newFormation[role].includes(fieldIndex)) {
        newFormation[role] = newFormation[role].map((index) =>
          index === fieldIndex ? subIndex : index
        );
        break;
      }
    }

    const subIdx = newSubs.indexOf(subIndex);
    if (subIdx !== -1) {
      newSubs[subIdx] = fieldIndex;
    }

    setFormation(newFormation);
    setSubs(newSubs);
  };

  return (
    <div className="pick-team-container-424">
      <h1>Your Team</h1> 
      <a href="/LeagueStanding" className=" bi-play-fill btn-play">Start your League</a>
      <div className="pitch1">
        {Object.keys(formation).map((role, idx) => (
          <div key={idx} className={`row1 ${role.toLowerCase()}`}>
            {formation[role].map((playerIndex) => (
              <div
                key={playerIndex}
                className={`player-card ${
                  selectedPlayer?.playerIndex === playerIndex && !selectedPlayer?.fromSubs
                    ? "selected"
                    : ""
                }`}
                style={{ borderColor: players424[playerIndex].color }}
                onClick={() => handlePlayerSelect(playerIndex, false)}
              >
                <p className="player-name">{players424[playerIndex].name}</p>
                <p className="player-team">{players424[playerIndex].team}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="substitutes">
        <h2>Substitutes</h2>
        <div className="row1 substitutes-row">
          {subs.map((playerIndex) => (
            <div
              key={playerIndex}
              className={`player-card ${
                selectedPlayer?.playerIndex === playerIndex && selectedPlayer?.fromSubs
                  ? "selected"
                  : ""
              }`}
              style={{ borderColor: players424[playerIndex].color }}
              onClick={() => handlePlayerSelect(playerIndex, true)}
            >
              <p className="player-name">{players424[playerIndex].name}</p>
              <p className="player-team">{players424[playerIndex].team}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default PickTeam424;
