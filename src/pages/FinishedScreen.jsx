import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const FinishedScreen = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const points = location.state.score;
  const gameMode = location.state.gameMode;
  const percentage = Math.ceil((points * 100) / 300);
  const level = location.state.level;

  let congrats;
  if (percentage === 100) congrats = "Perfect!";
  if (percentage >= 80 && percentage < 100) congrats = "Excellent!";
  if (percentage >= 50 && percentage < 80) congrats = "Good!";
  if (percentage > 0 && percentage < 50) congrats = "Bad luck!";
  if (percentage === 0) congrats = "Oh no!";

  return (
    <>
      <p className="result">
        {congrats} You scored <strong>{points}</strong> out of 300 ({percentage}
        %)
      </p>
      <div className="reset-btns">
        <button
          style={{ width: "15em" }}
          className="btn"
          onClick={() => navigate("/")}
        >
          Main Menu
        </button>
      </div>
    </>
  );
};
