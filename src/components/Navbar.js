import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navigation">
      <div className="logo" onClick={() => navigate("/Dashboard")}>
       AAL Simulation
      </div>
      <ul className="nav-links">
        <li>
          <button className="bi-house-fill" onClick={() => navigate("/homepage")}>Home</button>
        </li>
        <li>
          <button className="bi-people-fill" onClick={() => navigate("/playnow")}>Teams</button>
        </li>
        <li>
          <button className="bi bi-trophy-fill" onClick={() => navigate("/LeagueStanding")}>Standing</button>
        </li>
        <li>
          <button className="bi-award-fill" onClick={() => navigate("/PlayerRanking")}>Rankings</button>
        </li>
        <li>
          <button className="bi-info-circle-fill" onClick={() => navigate("/about")}>About</button>
        </li>
      </ul>
      <div className="cta">
        <button  className=" bi bi-box-arrow-in-right login" onClick={() => navigate("/")}>
          Login
        </button>
        <button className=" bi-person-fill signup" onClick={() => navigate("/")}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
