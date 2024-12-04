import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "./Video";

const HomePage = () => {
const navigate = useNavigate();
  function handlevid () {
  navigate('/Video')    
  }
  return (
    <div className="cfb">
    <div className="home-container">
      {/* <header className=" home-header">
        <div className="logo">AAL Arena</div>
        <nav className="navigation">
  <ul className="nav-links">
    <li>
      <button onClick={() => window.location.href = "/about"}>About</button>
    </li>
    <li>
      <button onClick={() => window.location.href = "#features"}>Features</button>
    </li>
    <li>
      <button onClick={() => window.location.href = "#contact"}>Contact</button>
    </li>
  </ul>
</nav>

      </header> */}

      <section className=" hero">
        <div className=" hero-content">
          <h1>Welcome to Ankh-Arena League Simulation</h1>
          <p>
            Choose your dream team, compete globally, and track player stats in real-time. Be the ultimate football manager!
          </p>
          <a href="/playnow" className=" bi-play-fill btn-play">Play Now</a>
        </div>
      </section>


      <section id="features" className="features">
  <h2>Why Play AAL?</h2>
  <div className="feature-grid">
    <div className="feature">
      <h3>Choose Your Dream Team</h3>
      <p>
        Pick 1 Team from all 15 Premier League clubs and create the ultimate squad.
      </p>
    </div>
    <div className="feature">
      <h3>Compete Globally</h3>
      <p>Join leagues and compete with millions of managers worldwide.</p>
    </div>
    <div className="feature">
      <h3>Real-Time Updates</h3>
      <p>
        Track player performances and score updates live during matches.
      </p>
    </div>
    <div className="feature">
      <h3>Strategic Gameplay</h3>
      <p>
        Use chips like Wildcard and Triple Captain to maximize your points.
      </p>
    </div>
    <div className="feature">
      <h3>Manage Your Budget</h3>
      <p>
        Stay within your budget while selecting top players and balancing your team.
      </p>
    </div>
    <div className="feature">
      <h3>Weekly Challenges</h3>
      <p>
        Take on weekly challenges to earn additional rewards and climb the rankings.
      </p>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Players Say</h2>
        <div className="testimonial-grid">
          <div className=" container py-5 testimonial">
            <p>
              "AAL has transformed how I enjoy football. It's fun, competitive, and keeps me engaged every week!"
            </p>
            <h4>- Mostafa O.</h4>
          </div>
          <div className=" container py-5 testimonial">
            <p>
              "Managing my team feels like I'm a real coach. The live updates are so thrilling!"
            </p>
            <h4>- Ahmed Y.</h4>
          </div>
<div className=" container py-5 testimonial">

            <p>
              "Cristino ronaldo suuiii!!!."
            </p>
            <h4>- iShowSpeed</h4>
          </div>
          <div className=" container py-5 testimonial">
            <p>
              "يا الله! ما أروع هذا التطبيق، إنه حقاً رائع!"
            </p>
            <h4>- Hanyx115</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <p>© 2024 AAL Arena. All Rights Reserved.</p>
          <p>
            Contact us at <a href="mailto:Ahmedhanyx115@gmail.com">Ahmedhanyx115@gmail.com</a>
          </p>
          
        </div>
      </footer>
    </div>
    </div>
  );
};

export default HomePage;
