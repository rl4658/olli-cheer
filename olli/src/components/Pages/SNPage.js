import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import SnNavBar from "../NavBars/SnNavBar";
import "./snPage.css"; // Import the CSS file

export default function HomePage({ user }) {
  const navigate = useNavigate(); // Initialize navigate function

  const handleGameClick = (gameName) => {
    // Handle click event for each game button
    console.log(`Clicked on ${gameName}`);
    
    // Check if the clicked game is Tetris, then navigate to "/tetris"
    if (gameName === "Tetris") {
      navigate("/tetris");
    }
  };

  return (
    <div>
      <SnNavBar user={user} />
      <div className="game-container">
        <h2>Games</h2>
        <div className="gameBtn-container">
          <button className="gameBtn" onClick={() => handleGameClick("Tetris")}>
            Tetris
          </button>
          <button className="gameBtn" onClick={() => handleGameClick("Pinball")}>
            Pinball
          </button>
          <button className="gameBtn" onClick={() => handleGameClick("Pong")}>
            Pong
          </button>
          <button className="gameBtn" onClick={() => handleGameClick("Another Game")}>
            Another Game
          </button>
        </div>
      </div>
    </div>
  );
}
