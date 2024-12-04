import React from "react";
import "./About.css"; // Optional CSS file for styling

const About = () => {
  return (

    <div className="about-container ">
      <h1>About Ankh-Arena League Simulation (AAL)</h1>
      <p>
      Ankh-Arena League Simulation (AAL) is one of the most popular fantasy football games in the world, where players take on the role of a manager and create their own dream team using real-life players from the English Premier League.
      </p>
      <h2>How It Works</h2>
      <ul>
        <li>
          <strong>Choose Your Team:</strong> Choose 15 players within a set budget, including starting 11 and substitutes.
        </li>
        <li>
          <strong>Earn Points:</strong> Players earn points based on their real-life performances in Premier League matches.
        </li>
        <li>
          <strong>Compete Globally:</strong> Join with friends or compete with millions of players worldwide.
        </li>
      </ul>
      <h2>Why Play AAL?</h2>
      <p>
       AAL is more than just a game—it’s a way to connect with football, test your managerial skills, and compete with friends. Whether you're a die-hard football fan or just looking for a fun and engaging challenge, AAL offers something for everyone.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>Live point updates during matchdays</li>
        <li>Captain and vice-captain choices for bonus points</li>
        <li>Chips like Wildcard, Triple Captain, and Bench Boost for strategic play</li>
        <li>Insights, tips, and stats to help you make informed decisions</li>
      </ul>
      <p>
        Ready to take on the challenge? Join AAL today and prove you have what it takes to be a top manager!
      </p>
    </div>
  );
};

export default About;
