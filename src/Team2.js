import React, { useState } from "react";
import "./PickTeam424.css";
import { useParams } from "react-router-dom";
import PlayNow from "./Playnow";
import { useNavigate } from "react-router-dom";


const players424 = [
  { name: "Ramsdale", position: "GK", team: "Arsenal", color: "#EF0107" },
  { name: "Trippier", position: "DEF", team: "Newcastle", color: "#241F20" },
  { name: "Van Dijk", position: "DEF", team: "Liverpool", color: "#C8102E" },
  { name: "Martinez", position: "DEF", team: "Man United", color: "#DA291C" },
  { name: "Walker", position: "DEF", team: "Man City", color: "#6CABDD" },
  { name: "Casemiro", position: "MID", team: "Man United", color: "#DA291C" },
  { name: "Rodri", position: "MID", team: "Man City", color: "#6CABDD" },
  { name: "Son", position: "FWD", team: "Tottenham", color: "#132257" },
  { name: "Jesus", position: "FWD", team: "Arsenal", color: "#EF0107" },
  { name: "Núñez", position: "FWD", team: "Liverpool", color: "#C8102E" },
  { name: "Sterling", position: "FWD", team: "Chelsea", color: "#034694" },
  { name: "Areola", position: "GK", team: "WestHam", color: "#7A263A" }, // Substitute
  { name: "Welbeck", position: "FWD", team: "Brighton", color: "#0057B8 " }, // Substitute
  { name: "Mbeumo", position: "MID", team: "Brentford", color: "#D00027  " }, // Substitute
  { name: "Digne", position: "DEF", team: "Aston villa", color: "#670E36 " }, // Substitute
];

const initialFormation424 = {
  GK: [0],
  DEF: [1, 2, 3, 4],
  MID: [5, 6, 7],
  FWD: [8, 9, 10],
};

const PickTeam424 = () => {
  const navigate = useNavigate();
  const [formation, setFormation] = useState(initialFormation424);
  const [subs, setSubs] = useState([11, 12, 13, 14]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

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
