import React, { useState } from "react";
import "./PickTeam424.css";
import { useNavigate } from "react-router-dom";

const players424 = [
  { name: "Allison", position: "GK", team: "Liverpool", color: "#C8102E" },
  { name: "Arnold", position: "DEF", team: "Liverpool", color: "#C8102E" },
  { name: "De Ligt", position: "DEF", team: "Man United", color: "#DA291C" },
  { name: "Gvardiol", position: "DEF", team: "Man City", color: "#6CABDD" },
  { name: "Luis Diaz", position: "MID", team: "Liverpool", color: "#C8102E" },
  { name: "Palmer", position: "MID", team: "Chelsea", color: "#034694" },
  { name: "Saka", position: "MID", team: "Arsenal", color: "#EF0107" },
  { name: "Maddison", position: "MID", team: "Tottenham", color: "#132257" },
  { name: "Salah", position: "FWD", team: "Liverpool", color: "#C8102E" },
  { name: "Haaland", position: "FWD", team: "Man City", color: "#6CABDD" },
  { name: "Ronaldo", position: "FWD", team: "Man United", color: "#DA291C" },
  { name: "Martinez", position: "GK", team: "Aston Villa", color: "#95BFE5" }, // Substitute
  { name: "Kane", position: "FWD", team: "Tottenham", color: "#132257" }, // Substitute
  { name: "Grealish", position: "MID", team: "Man City", color: "#6CABDD" }, // Substitute
  { name: "Van Dijk", position: "DEF", team: "Liverpool", color: "#C8102E" }, // Substitute
];

const initialFormation424 = {
  GK: [0],
  DEF: [1, 2, 3],
  MID: [4, 5, 6, 7],
  FWD: [8, 9, 10],
};

const PickTeam424 = () => {
  const navigate = useNavigate();
  const [formation, setFormation] = useState(initialFormation424);
  const [subs, setSubs] = useState([11, 12, 13, 14]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
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

    // Find the role of the field player and update it
    for (const role in newFormation) {
      if (newFormation[role].includes(fieldIndex)) {
        newFormation[role] = newFormation[role].map((index) =>
          index === fieldIndex ? subIndex : index
        );
        break;
      }
    }

    // Update substitutes
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
