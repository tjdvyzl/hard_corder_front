import React from "react";
import { useNavigate } from "react-router-dom";

export const StartScreen = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/quiz/${e.target.value}`);
  };

  return (
    <div className="start-screen">
      <h2>Welcome to The hackathon Quiz!</h2>
      <h3>many question to test your general knowledge</h3>
      <h4 style={{ marginTop: "20px" }}>First, choose the test difficulty:</h4>
      <div className="game-mode">
        <button
          className="btn2"
          value="low"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: "#0ee32a" }}
        >
          Low
        </button>
        <button
          className="btn2"
          value="middle"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: "#e3ce0e" }}
        >
          Middle
        </button>
        <button
          className="btn2"
          value="high"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: "#fc2121" }}
        >
          High
        </button>
      </div>
    </div>
  );
};
