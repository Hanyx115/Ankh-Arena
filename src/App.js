import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css";
import './Contanier.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Container from "./Container";
import Homepage from "./homepage";
import About from "./About";
import PlayNow from "./Playnow";
import Team1 from "./Team1";
import Team2 from "./Team2";
import Team3 from "./Team3";
import LeagueStanding from "./LeagueStanding";
import Dashboard from "./Dashboard";
import PlayerRanking from "./PlayerRanking";
import VideoPlayer from "./Video";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="App cfb ">
      <Routes>
      <Route index element = {<Container/>} />
      <Route path="/" element={<Container />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/About" element={<About />} />
      <Route path="/playnow" element={<PlayNow />} />
      <Route path="/Team/1" element={<Team1 />} />
      <Route path="/Team/2" element={<Team2 />} />
      <Route path="/Team/3" element={<Team1 />} />
      <Route path="/Team/4" element={<Team2 />} />
      <Route path="/Team/5" element={<Team1 />} />
      <Route path="/Team/6" element={<Team2 />} />
      <Route path="/Team/7" element={<Team1 />} />
      <Route path="/Team/8" element={<Team3 />} />
      <Route path="/Team/9" element={<Team1 />} />
      <Route path="/Team/10" element={<Team2 />} />
      <Route path="/Team/11" element={<Team1 />} />
      <Route path="/Team/12" element={<Team2 />} />
      <Route path="/Team/13" element={<Team1 />} />
      <Route path="/Team/14" element={<Team2 />} />
      <Route path="/Team/15" element={<Team1 />} />
      <Route path="/LeagueStanding" element={<LeagueStanding />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/PlayerRanking" element={<PlayerRanking />} />
      <Route path="/Video" element={<VideoPlayer />} />
      </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;



